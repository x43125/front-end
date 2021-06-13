package com.wx.vue_day3_admin.controller;

import com.wx.vue_day3_admin.entity.User;
import com.wx.vue_day3_admin.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Integer userId) {
        userService.deleteUserById(userId);
    }

    @GetMapping("/{id}")
    public User user(@PathVariable("id") Integer userId) {
        LOGGER.info("获取到的用户ID: {}", userId);
        return userService.findByUserId(userId);
    }

    @PostMapping("saveOrUpdate")
    public void saveOrUpdate(@RequestBody User user) {
//        LOGGER.info("接收到的用户数据是: {}", user);
//        User user = userService.findByUserId(userId);
        if (ObjectUtils.isEmpty(user.getId())) {
            LOGGER.info("添加业务逻辑...");
            userService.save(user);
        } else {
            LOGGER.info("更新业务逻辑...");
            userService.update(user);
        }
    }

    @RequestMapping("/getAll")
    public List<User> users() {
        return userService.findAll();
    }
}
