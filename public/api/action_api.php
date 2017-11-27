<?php

class MyApi
{
	/**
	 * Object containing all incoming request params
	 * @var object
	 */
	private $request;
	private $config;
	private $lti_jwt;

	public function __construct($config)
	{
		$this->config = $config;
		$this->_processRequest();
		$this->lti_jwt = array();
	}


	/* Added authenticator for LTI_JWT */
	protected function verify_LTI_JWT() {
		//For $this->settings['method'] == 'GET', 'POST', 'PUT', 'DELETE'
		//error_log('jwt' . json_encode($this->settings['get']['jwt_token']));

		error_log('verify_LTI_JWT is called..' . json_encode($_REQUEST['jwt_token']));
		$result = false;

		$jwt_token = isset($_REQUEST['jwt_token'])?$_REQUEST['jwt_token']:'';

		try {
			$lti_jwt = JWT::decode($jwt_token, $this->config['jwt_key']);
			$this->lti_jwt = $lti_jwt;
			$result = true;

		}
		catch(UnexpectedValueException $e) {
			$this->lti_jwt = false;
			error_log('UnexpectedValueException: ' . $e->getMessage());
		}

		return $result;
	}



	/**
	 * Routes incoming requests to the corresponding method
	 *
	 * Converts $_REQUEST to an object, then checks for the given action and
	 * calls that method. All the request parameters are stored under
	 * $this->request.
	 */
	private function _processRequest()
	{
		//error_log('server' . json_encode($_SERVER));
		//error_log('request' . json_encode($_REQUEST));


		/* Authenticator */
		if($this->config['authenticator']) {
			$auth = $this->config['authenticator'];

			if(method_exists($this, $auth)) {
				$auth_result = $this->$auth();

				if(!$auth_result) {
					$this->reply("Unauthorized", 401);
					exit();					
				}

			}
			else {
				$this->reply("The authenticator function is not found.", 404);
				exit();
			}
		}

		// get the request
		if (!empty($_REQUEST)) {
			// convert to object for consistency
			$this->request = json_decode(json_encode($_REQUEST));
		} else {
			// already object
			$this->request = json_decode(file_get_contents('php://input'));
		}


		//check if an action is sent through
		if(!isset($this->request->action)){
			$this->reply("No Action Provided", 400);
			exit();
		}
		else if(!method_exists($this, $this->request->action)){
			$this->reply("The action function is not found.", 404);
			exit();
		}
		else {
			$action = $this->request->action;
			$this->$action();
		}

	}

	public function getLtiInfo() {
		//error_log('getLtiInfo is called..');
		$data = json_encode($this->lti_jwt);
		$this->reply('LTI Info' . $data);

	}


	/**
	 * Returns JSON data with HTTP status code
	 *
	 * @param  array $data - data to return
	 * @param  int $status - HTTP status code
	 * @return JSON
	 */
	private function reply($data, $status = 200){
        $protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.1');
        //error_log(json_encode($protocol));
        header($protocol . ' ' . $status);
		header('Content-Type: application/json');
		echo json_encode($data);
		exit;
	}

	/**
	 * Determines if the logged in user has admin rights
	 *
	 * This is just a placeholder. Here you would check the session or database
	 * to see if the user has admin rights.
	 *
	 * @return boolean
	 */
	public function isAdmin()
	{
		$this->reply(true);
	}


} //MyApi class end

require_once('../lib/jwt_helper.php');
require_once('../config.php');
$MyApi = new MyApi($config);

