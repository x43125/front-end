package com.wx.vuestudy.entity;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/09
 */
public class User {
    private int id;
    private String username;
    private int age;
    private String des;

    public User(int id, String username, int age, String des) {
        this.id = id;
        this.username = username;
        this.age = age;
        this.des = des;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }
}
