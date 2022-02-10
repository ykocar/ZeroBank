package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class PayBillsPage {

    public PayBillsPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//li[@id='pay_bills_tab']/a")
    public WebElement payBillsBtn;

    @FindBy(xpath = "(//li[@class='ui-state-default ui-corner-top'])[1]/a")
    public WebElement addNewPayeeBtn;

    @FindBy(xpath = "(//li[@class='ui-state-default ui-corner-top'])[2]/a")
    public WebElement purcForCurrencyBtn;

    @FindBy(id = "np_new_payee_name")
    public WebElement payeeName;

    @FindBy(id = "np_new_payee_address")
    public WebElement payeeAddress;

    @FindBy(id = "np_new_payee_account")
    public WebElement payeeAccount;

    @FindBy(id = "np_new_payee_details")
    public WebElement payeeDetails;

    @FindBy(id = "add_new_payee")
    public WebElement addBttn;

    @FindBy(id = "alert_content")
    public WebElement message;

    @FindBy(xpath = "//select[@id='pc_currency']/option[1]")
    public WebElement selectOneOption;

//    @FindBy(xpath = "//select[@id='pc_currency']/option[1]")
//    public WebElement selectOneOption;

    @FindBy(id = "pc_amount")
    public WebElement amountCheckBox;

    @FindBy(id = "pc_inDollars_true")
    public WebElement UsDollarsRadioBttn;

    @FindBy(id = "pc_inDollars_false")
    public WebElement selectedCurrencyBttn;

    @FindBy(id = "pc_calculate_costs")
    public WebElement calcCostsBttn;

    public void payeeInfo(String payeeNameStr, String payeeAddressStr, String accountStr, String payeeDetailsStr) {
        payeeName.sendKeys(payeeNameStr);
        payeeAddress.sendKeys(payeeAddressStr);
        payeeAccount.sendKeys(accountStr);
        payeeDetails.sendKeys(payeeDetailsStr);

    }

    public void currencyTypes() {

        BrowserUtils.waitFor(2);
        //1.locate your dropdown just like any other web element with unique locator
        WebElement dropdownElement = Driver.get().findElement(By.id("pc_currency"));
        //2.create Select object by passing that element as a constructor
        Select currencyDropdown = new Select(dropdownElement);

        //getOptions --> returns all the available options from the dropdown
        List<WebElement> options = currencyDropdown.getOptions();

        System.out.println("options.size() = " + options.size());

        //print the option one by one
        for (WebElement option : options) {

            System.out.println(option.getText());
        }

        currencyDropdown.selectByVisibleText("Australia (dollar)");

        String expectedOption = "Australia (dollar)";
        String actualOption = currencyDropdown.getFirstSelectedOption().getText();

        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Canada (dollar)");

        expectedOption = "Canada (dollar)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Switzerland (franc)");

        expectedOption = "Switzerland (franc)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("China (yuan)");

        expectedOption = "China (yuan)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Denmark (krone)");

        expectedOption = "Denmark (krone)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Eurozone (euro)");

        expectedOption = "Eurozone (euro)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Great Britain (pound)");

        expectedOption = "Great Britain (pound)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Japan (yen)");

        expectedOption = "Japan (yen)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Mexico (peso)");

        expectedOption = "Mexico (peso)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Norway (krone)");

        expectedOption = "Norway (krone)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("New Zealand (dollar)");

        expectedOption = "New Zealand (dollar)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

        currencyDropdown.selectByVisibleText("Singapore (dollar)");

        expectedOption = "Singapore (dollar)";
        actualOption = currencyDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption, expectedOption);

    }


}



