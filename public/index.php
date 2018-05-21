<!DOCTYPE html>
<html>
    <head>
        <base href="/HPComponents/public/" /> 

        <meta charset="utf-8">
        <title>HPComponents</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

         <?php
        	require_once('./config.php');
        	require_once('./lib/lti.php');
            require_once('./lib/jwt_helper.php');

        	$lti = new Lti($config,true);

            if(!$lti->is_valid()) {
                echo("LTI Not Valid");
        		die();
        	}

            /* Transfer lti information to client */
            $lti_vars = $lti->calldata();

            /* Activity ID */
            $activity_id = isset($lti_vars['custom_activity_id']) ? $lti_vars['custom_activity_id'] : 1;

            /* Create JWT Token */
            $jwt_token = array();
            $jwt_token['resource_link_id'] = $lti->lti_id();
            $jwt_token['user_id'] = $lti->user_id();
            $jwt_token['course_id'] = $lti_vars['context_id'];
            $jwt_encode_token = JWT::encode($jwt_token, $config['jwt_key']);

        ?>
    </head>
    <body>
    <script type="text/javascript">
        $LTI_VARS = <?php echo json_encode($lti_vars); ?>;
        $JWT_TOKEN = <?php echo json_encode($jwt_encode_token); ?>;

        $ACTIVITY_ID = $LTI_VARS['custom_activity_id'] ? $LTI_VARS['custom_activity_id'] :1;
        $COURSE_ID = $LTI_VARS['context_id'];
        $STUDENT_ID = $LTI_VARS['user_id'];
	</script>
    <div id="app"></div>
    <script type="text/javascript" src="./build/bundle.js"></script>
    <script src='../src/lib/pdfmake.min.js'></script>
 	<script src='../src/lib/vfs_fonts.js'></script>
    </body>
</html>
