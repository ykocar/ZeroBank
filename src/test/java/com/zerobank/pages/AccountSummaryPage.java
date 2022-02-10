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

public class AccountSummaryPage {

    public AccountSummaryPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "account_summary_link")
    public WebElement accountSummaryBtn;

    @FindBy(xpath = "//li[@id='account_activity_tab']/a")
    public WebElement accountActivityBtn;

    public void getAllHeaders() { //columns of the tables in this page (Credit Accounts table)

        List<WebElement> headers = Driver.get().findElements(By.xpath("(//table[@class='table'])[3]//th"));

        System.out.println("headers.size() = " + headers.size());

        for (WebElement header : headers) {
            System.out.println(header.getText());

        }
    }

    //to click the links on the Account Summary Page we use this method
    public void navigateToLink(String link,String type) {

        BrowserUtils.waitFor(2);

        //there are two links having same name "Savings"
         if(type.equals("Savings2")){

             Driver.get().findElement(By.xpath("(//a[text()='Savings'])[2]")).click();
         }else{
             Driver.get().findElement(By.xpath("//a[text()='"+link+"']")).click();
         }
    }

    //Get title of Accout Summary page
    public void getTitle () {

        accountSummaryBtn.click();

        String expectedTitle = "Zero - Account Summary";

        String actualTitle = Driver.get().getTitle();

        System.out.println("actualTitle = " + actualTitle);

        Assert.assertEquals(actualTitle,expectedTitle);

    }

    public void accountTypes () {

        List<WebElement> accountTypes = Driver.get().findElements(By.className("board-header"));

        System.out.println(accountTypes.size());

        for (WebElement accountType : accountTypes) {

            System.out.println(accountType.getText());
        }


    }
    //On the Account Summary page, the
    public void navigateToTab(String tab) {

        BrowserUtils.waitFor(3);

        WebElement tabMenu= Driver.get().findElement(By.xpath("//a[text()='"+tab+"']"));

        Assert.assertTrue(tabMenu.isDisplayed());
        }

    public void dropDown(String eachdropDown) {

        BrowserUtils.waitFor(3);

        Select selection = new Select(Driver.get().findElement(By.xpath("//select[@id='aa_accountId']")));

        List<WebElement> options = selection.getOptions();

        System.out.println("options.size() = " + options.size());

            selection.selectByVisibleText(eachdropDown);

            BrowserUtils.waitFor(2);

            String actual =selection.getFirstSelectedOption().getText();

            Assert.assertEquals(eachdropDown, actual);
        }
    }

