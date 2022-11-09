package com.wx.test;

import com.wx.vue_day3_admin.service.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
public class TestUserService extends BasicTest {
    @Autowired
    private UserService userService;

    @Test
    public void findAll() {
        userService.findAll().forEach(user -> System.out.println(user));
    }
}
