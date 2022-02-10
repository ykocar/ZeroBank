package com.zerobank.pages;

import com.sun.org.apache.bcel.internal.generic.SWITCH;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivityPage {

    public AccountActivityPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//li[@id='account_activity_tab']/a")
    public WebElement accountActivityBtn;

    @FindBy(xpath = "//a[text()='Find Transactions']")
    public WebElement findTransactionsButtn;

    @FindBy(id = "aa_fromDate")
    public WebElement fromDate;

    @FindBy(id = "aa_toDate")
    public WebElement toDate;

    @FindBy(css = "button.btn.btn-primary")
    public WebElement findBttn;

    @FindBy(xpath = "(//table[@class='table table-condensed table-hover'])[2]/tbody/tr/td[1]")
    public List<WebElement> tableDate;

    @FindBy(id = "aa_description")
    public WebElement descriptionBox;

    @FindBy(xpath = "(//table[@class='table table-condensed table-hover'])[2]/tbody/tr/td[2]")
    public List<WebElement> tableDescription;

    @FindBy(css = "div.well")
    public WebElement noResult;

    @FindBy(xpath = "(//table[@class='table table-condensed table-hover'])[2]/tbody/tr/td[3]")
    public List<WebElement> depositData;

    @FindBy(xpath = "(//table[@class='table table-condensed table-hover'])[2]/tbody/tr/td[4]")
    public List<WebElement> withdrawalData;

    //Get title of Account Activity page
    public void getTitle () {

        String expectedTitle = "Zero - Account Activity";

        String actualTitle = Driver.get().getTitle();

        System.out.println("actualTitle = " + actualTitle);

        Assert.assertEquals(actualTitle,expectedTitle);

    }

    public void getAllHeaders() { //columns of the tables in this page (Show Transactions table)

        BrowserUtils.waitFor(3);
        List<WebElement> headers = Driver.get().findElements(By.xpath("//table[@class='table table-condensed table-hover']/thead/tr/th"));

        System.out.println("headers.size() = " + headers.size());

        for (WebElement header : headers) {
            System.out.println(header.getText());

        }
    }

    public void accountTypes () {

        //1.locate your dropdown just like any other web element with unique locator
        WebElement dropdownElement = Driver.get().findElement(By.id("aa_accountId"));
        //2.create Select object by passing that element as a constructor
        Select accountDropdown = new Select(dropdownElement);

        //getOptions --> returns all the available options from the dropdown
        List<WebElement> options = accountDropdown.getOptions();

        System.out.println("options.size() = " + options.size());

        //print the option one by one
        for (WebElement option : options) {

            System.out.println(option.getText());
        }

        //verify that first selection is "Savings"
        String expectedOption = "Savings";
        String actualOption = accountDropdown.getFirstSelectedOption().getText();

        Assert.assertEquals(actualOption,expectedOption);

        accountDropdown.selectByVisibleText("Checking");

        expectedOption = "Checking";
        actualOption = accountDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption,expectedOption);

        accountDropdown.selectByVisibleText("Savings");

        expectedOption = "Savings";
        actualOption = accountDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption,expectedOption);

        accountDropdown.selectByVisibleText("Loan");

        expectedOption = "Loan";
        actualOption = accountDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption,expectedOption);

        accountDropdown.selectByVisibleText("Credit Card");

        expectedOption = "Credit Card";
        actualOption = accountDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption,expectedOption);

        accountDropdown.selectByVisibleText("Brokerage");

        expectedOption = "Brokerage";
        actualOption = accountDropdown.getFirstSelectedOption().getText();
        Assert.assertEquals(actualOption,expectedOption);
        }

    public boolean betweenDate(String fromDate, String toDate) {
        boolean b = true;
        //convert the dates given in scenario from String to integer
        int intFromDate = Integer.parseInt(fromDate.replace("-", ""));
        int intToDate = Integer.parseInt(toDate.replace("-", ""));
        System.out.println("intFromDate = " + intFromDate);
        System.out.println("intToDate = " + intToDate);

        //convert the dates in table from String to integer
        for (WebElement eachDate : tableDate) {
            System.out.println("eachDate.getText() = " + eachDate.getText());
            String eachstr = eachDate.getText().replace("-", "");

            System.out.println("eachstr = " + eachstr);

            if (intToDate < Integer.parseInt(eachstr) || intFromDate > Integer.parseInt(eachstr)) {
                b = false;
                break;
            }
        }
        System.out.println("b = " + b);
        return b;

    }

    public boolean mostRecentSorted() {
        boolean x = true;

        //convert the dates in table from String to integer
        for (WebElement eachDate2 : tableDate) {
            System.out.println("eachDate2.getText() = " + eachDate2.getText());
            int dateBydate = Integer.parseInt(eachDate2.getText().replace("-", ""));
            System.out.println("dateBytedate = " + dateBydate);

            int numOfDates = tableDate.size();
            for (int i = 0; i < numOfDates; i++) {

                if (i > i + 1) {
                    x = false;
                    break;
                }
            }
        }
        System.out.println("x = " + x);
        return x;

    }

    public void type(String type) {

        switch (type) {

            case "Deposit" :

            WebElement dropdown = Driver.get().findElement(By.id("aa_type"));

            Select select = new Select(dropdown);

            select.selectByVisibleText("Deposit");

            break;

            case "Withdrawal":

            dropdown = Driver.get().findElement(By.id("aa_type"));

            select = new Select(dropdown);

            select.selectByVisibleText("Withdrawal");

            break;
        }

    }

}