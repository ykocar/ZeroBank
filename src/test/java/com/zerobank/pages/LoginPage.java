package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "user_login")
    public WebElement userName;

    @FindBy(id = "user_password")
    public WebElement password1;

    @FindBy(name = "submit")
    public WebElement signIn;

    @FindBy(xpath = "//form[@id='login_form']/div[1]")
    public WebElement errorMessage;

    @FindBy(id = "primary-button")
    public WebElement backToSafety;

    public void login(){
        Driver.get().get(ConfigurationReader.get("url"));
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");

        userName.sendKeys(username);
        password1.sendKeys(password);

        signIn.click();
        BrowserUtils.waitFor(1);
        backToSafety.click();

    }

    public void login1(String username1, String password2){
        userName.sendKeys(username1);
        password1.sendKeys(password2);
        signIn.click();
    }
}
