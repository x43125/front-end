package com.wx.vue_day3_admin.entity;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
public class User {
    private Integer id;
    private String name;
    private Double salary;
    private Integer age;
    private String des;

    public User() {
    }

    public User(Integer id, String name, Double salary, Integer age, String des) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.des = des;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", salary=" + salary +
                ", age=" + age +
                ", des='" + des + '\'' +
                '}';
    }
}
