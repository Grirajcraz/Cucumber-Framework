Feature: Datatable concept


@raw
Scenario: Validate the raw method
    When I provide the account details
    |NAME|Value|
    |Giri|Con|
    |hari|tend|
    |Yuri|weld|

@row
Scenario: Validate the row method
    When I provide the account details rows
    |NAME|Value|
    |Giri|Con|
    |hari|tend|
    |Yuri|weld|

@hashes
Scenario: Validate the hashes method
    When I provide the account details hashes
    |NAME|Value|
    |Giri|Con|
    |hari|tend|
    |Yuri|weld|

@rowshash
Scenario: Validate the rowhash method
    When I provide the account details rowshash
    |NAME|Value|
    |Giri|Con|
    |hari|tend|
    |Yuri|weld|


