$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AcoountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto\tspecific\taccounts\tin\tAccounts\tActivity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Select Account \u003clink\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on\t\"\u003clink\u003e\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Account\tdrop down should have \"\u003clink\u003e\" selected",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "link"
      ]
    },
    {
      "cells": [
        "Savings"
      ]
    },
    {
      "cells": [
        "Brokerage"
      ]
    },
    {
      "cells": [
        "Checking"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Loan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Select Account Savings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\t\"Savings\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_user_clicks_on_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have \"Savings\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.accountDropDownShouldHaveSelected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select Account Brokerage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\t\"Brokerage\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_user_clicks_on_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have \"Brokerage\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.accountDropDownShouldHaveSelected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select Account Checking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\t\"Checking\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_user_clicks_on_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have \"Checking\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.accountDropDownShouldHaveSelected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select Account Credit Card",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\t\"Credit Card\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_user_clicks_on_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have \"Credit Card\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.accountDropDownShouldHaveSelected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select Account Loan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\t\"Loan\" on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_user_clicks_on_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should\tbe displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have \"Loan\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.accountDropDownShouldHaveSelected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted by most recent date",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_results_should_be_sorted_by_most_recent_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters date range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results table should only not contain transactions dated \"2012-09-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_results_table_should_only_not_contain_transactions_dated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search\tdescription",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.theUserEntersDescription(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks find button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicksFindButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldOnlyShowDescriptionsContaining(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.theUserEntersDescription(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks find button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicksFindButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldOnlyShowDescriptionsContaining(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should not show descriptions containing \"ONLINE\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldNotShowDescriptionsContaining(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description case insensitive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.theUserEntersDescription(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldOnlyShowDescriptionsContaining(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"online\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.theUserEntersDescription(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should not show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldNotShowDescriptionsContaining(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowAtLeastOneResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowAtLeastOneResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.userSelectsType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowAtLeastOneResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under \"Withdrawal\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowNoResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.userSelectsType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowAtLeastOneResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under \"Deposit\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.FindTransactionsStepDefs.resultsTableShouldShowNoResultUnder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "User login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"username\" or \"user123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_logs_in_using_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/NewPayee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Go to \"Pay Bills\" module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.goToModule(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add New Payee tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.addNewPayeeTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates new payee using following information",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.createsNewPayeeUsingFollowingInformation(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.userClickTheAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"The new payee The Law Offices of Hyde, Price \u0026 Scharks was successfully created.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.messageShouldBeDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"Pay Bills\" module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.goToModule(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.theUserAccessesThePurchaseForeignCurrencyTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Go to \"Pay Bills\" module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.goToModule(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.theUserAccessesThePurchaseForeignCurrencyTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following currencies should be available",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.followingCurrenciesShouldBeAvailable(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"Pay Bills\" module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.goToModule(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.theUserAccessesThePurchaseForeignCurrencyTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user tries to calculate cost without selecting a currency",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.userTriesToCalculateCostWithoutSelectingACurrency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.AccountActivityStepDefs.theUserNavigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"Pay Bills\" module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.goToModule(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.theUserAccessesThePurchaseForeignCurrencyTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user tries to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.userTriesToCalculateCostWithoutEnteringAValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.PayBillsStepsDefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});