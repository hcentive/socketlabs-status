socketlabs-status
=================
Nagios plugin to check [Socketlabs](http://www.socketlabs.com) SMTP server and API utilization. The plugin calls the Socketlabs [reporting API](http://www.socketlabs.com/api-reference/reporting-api/) to retrieve usage metrics for SMTP servers.

## Requirements
The plugin is implemented in [Node.js](https://nodejs.org/en/). The following components are required to run this plugin -
* git
* nodejs (5.9.1)

## Installation and Configuration
Check out the repository from git -
```
$ git clone https://github.com/hcentive/socketlabs-status
```
Go to the `socketlabs-status` directory. Rename `default.json.template` to `default.json`.
```
$ cd socketlabs-status
$ mv conf/default.json.template conf/default.json
```
Update configuration attributes with your Socketlabs API credentials and server IDs. Make the following changes to `conf/default.json` -
* Replace `YOUR_API_USERNAME` with your Socketlabs API username.
* Replace `YOUR_API_PASSWORD` with the password for the API user.

If using a proxy server to make outbound HTTP calls, update the proxy server configuration -
*  Set the value of `proxy_enabled` to `true`.
* Replace `YOUR_PROXY_SERVER` with the address of your proxy server e.g. `http://localhost:3128`.

#### Critical and Warning Thresholds
The plugin uses `percentage` usage of the total Socketlabs allowance as the unit of measure for the Nagios checks. Default critical and warning thresholds are set at 85 and 70, respectively.

To change thresholds, update the following attributes in `conf/default.json` -
* `warning_threshold` to set the warning threshold.
* `critical_threshold` to set the critical threshold.

### Installation
Run `npm install` in the installation directory to install dependencies and the executable to run the status check. Run `socketlabs-status` to test the plugin -
```
$ npm install
$ socketlabs-status
CHECK-SOCKETLABS OK - Server ID: 8995 - 11.92% of total message allowance used; 0.96% of total bandwidth allowance used; 0.34% of total API allowance used|message-usage=11.92%;70;85;; bandwidth-usage=0.96%;70;85;; api-usage=0.34%;70;85;;
```

Depending on your Nagios installation, follow one of the following guides to install the plugin on your Nagios server -
* Nagios Core - [Nagios Plugins](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/plugins.html)
* Nagios XI - [Managing Plugins In Nagios XI](https://assets.nagios.com/downloads/nagiosxi/docs/Managing-Plugins-in-Nagios-XI.pdf)
