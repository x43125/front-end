package com.wx.vue_day3_admin.pojo;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/16
 */
public class LoginUser {
    private String name;
    private String password;
    private String veryfyCode;

    public LoginUser() {
    }

    public LoginUser(String name, String password, String veryfyCode) {
        this.name = name;
        this.password = password;
        this.veryfyCode = veryfyCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVeryfyCode() {
        return veryfyCode;
    }

    public void setVeryfyCode(String veryfyCode) {
        this.veryfyCode = veryfyCode;
    }

    @Override
    public String toString() {
        return "LoginUser{" +
                "name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", veryfyCode='" + veryfyCode + '\'' +
                '}';
    }
}
