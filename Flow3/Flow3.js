[
    {
        "id": "38e61d2933c27408",
        "type": "tab",
        "label": "Flow 4",
        "disabled": false,
        "info": ""
    },
    {
        "id": "44c492b1f257838d",
        "type": "mqtt out",
        "z": "38e61d2933c27408",
        "name": "",
        "topic": "codigoIoT/SIC/flow3/temp",
        "qos": "",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "edd3004a.11da88",
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "1a5bde1443257719",
        "type": "function",
        "z": "38e61d2933c27408",
        "name": "",
        "func": "var temp = msg.payload;\n\nmsg.payload = '{\"ID\":\"Raul MT\",\"Temp\":\"'+temp.toString()+'\",\"mnsg\":\"Hola grupo 3\"}'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 80,
        "wires": [
            [
                "44c492b1f257838d"
            ]
        ]
    },
    {
        "id": "79e442c68bad3444",
        "type": "inject",
        "z": "38e61d2933c27408",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "15",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payloadType": "date",
        "x": 80,
        "y": 160,
        "wires": [
            [
                "4716a394133cf00d"
            ]
        ]
    },
    {
        "id": "6ec54496f90169cf",
        "type": "mqtt in",
        "z": "38e61d2933c27408",
        "name": "",
        "topic": "codigoIoT/SIC/flow3/temp",
        "qos": "2",
        "datatype": "auto",
        "broker": "edd3004a.11da88",
        "nl": false,
        "rap": true,
        "rh": 0,
        "x": 200,
        "y": 320,
        "wires": [
            [
                "9fdef72bd46a3fd8"
            ]
        ]
    },
    {
        "id": "9fdef72bd46a3fd8",
        "type": "debug",
        "z": "38e61d2933c27408",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 440,
        "y": 340,
        "wires": []
    },
    {
        "id": "4716a394133cf00d",
        "type": "random",
        "z": "38e61d2933c27408",
        "name": "Temp",
        "low": "10",
        "high": "45",
        "inte": "true",
        "property": "payload",
        "x": 250,
        "y": 200,
        "wires": [
            [
                "1a5bde1443257719"
            ]
        ]
    },
    {
        "id": "edd3004a.11da88",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "raul-MT-647",
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "sessionExpiry": ""
    }
]
