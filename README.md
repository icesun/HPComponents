# CORPINN1x_VPC

This is a 'value prposition canvas' tool developed for UQx CORPINN1x.
It will be multiple used in Module 4, Module 7 and Module 8.

## Get Started 

### Step 1)

Ensure that you have apache running on port 80, I recommend using MAMP/WAMP 🐘 or equivalent for a GUI interface

This is necessary as BrowserSyncPlugin proxy setting lets you use existing Apache virtual host for API.

### Step 2)
1. Create database and user account for the database. The information is needed by config.php.

2. If using DB, create tables by importing ./db_install/xxxxxxxxx.sql

3. Ensure that you have a proper ./public/config.php. See below for the boiler plate

### Config.php
```php
<?php
    $config = array(
        'lti_keys'=>array(
            'YOUR_CLIENT_KEY'=>'YOUR_CLIENT_SECRET'

        ),
        'db_meta'=>array(
            'dbengine'=>'MySQL',
            'charset'=>'utf8',

            'hostname'=>'127.0.0.1',
            'username'=>'YOUR_DB_USERNAME',
            'password'=>'YOUR_DB_PASSWORD',
            'database'=>'YOUR_DB_NAME',
        ),
        'authenticator' => 'verify_LTI_JWT',
        'jwt_key' => 'JWT_SECRET',

    );
?>
```

### Step 3) 🎨 🖌️

Install dependencies 

```
npm install
```
Start webpack watch by using -

```
npm start
```

### Production 🖼️

Everything should be awesome right now... Run the following command - 

```
npm run build
``` 


## Optional

#### JQuery -

You will notice that i've commented out JQuery inside webpack's provider plugin. If you want to use it for any reason you can uncomment and run -
```
npm start
```
to restart webpack. 

#### BundleAnalyzerPlugin -

I've commented this out inside webpack.config as you only need to use it when you're mostly done with your app, this is mainly for optimising your code. 