package com.wx.vue_day3_admin;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
@SpringBootApplication
@MapperScan("com.wx.vue_day3_admin.dao")
public class AdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(AdminApplication.class, args);
    }

}
