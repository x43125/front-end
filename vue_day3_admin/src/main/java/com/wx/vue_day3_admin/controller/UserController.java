package com.wx.vue_day3_admin.controller;

import com.wx.vue_day3_admin.entity.User;
import com.wx.vue_day3_admin.model.ResultInfo;
import com.wx.vue_day3_admin.pojo.LoginUser;
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

    @RequestMapping("/login")
    public ResultInfo login(@RequestBody LoginUser loginUser) {
        if (ObjectUtils.isEmpty(loginUser)) {
            throw new RuntimeException("用户为空");
        }
        User resultUser = userService.findByUserName(loginUser.getName());
        String msg = null;
        int code = 0;
        if (ObjectUtils.isEmpty(resultUser)) {
            msg = "用户名或密码错误";
            code = 400;
        } else {
            if (loginUser.getPassword().equals(resultUser.getPassword())) {
                msg = "登陆成功";
                code = 200;
            } else {
                msg = "用户名或密码错误";
                code = 400;
            }
        }
        ResultInfo resultInfo = new ResultInfo();
        resultInfo.setCode(code);
        resultInfo.setMsg(msg);
        return resultInfo;
    }

    public ResultInfo register(@RequestBody User user) {
        ResultInfo resultInfo = new ResultInfo();

        return resultInfo;
    }

    @GetMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Integer userId) {
        userService.deleteUserById(userId);
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable("id") Integer userId) {
        LOGGER.info("获取到的用户ID: {}", userId);
        return userService.findByUserId(userId);
    }

    @PostMapping("/saveOrUpdate")
    public void saveOrUpdate(@RequestBody User user) {
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
