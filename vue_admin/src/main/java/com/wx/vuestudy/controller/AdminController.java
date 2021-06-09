package com.wx.vuestudy.controller;

import com.wx.vuestudy.entity.User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/09
 */
@RestController
@CrossOrigin // 允许所有域访问
public class AdminController {

    @PostMapping("save")
    public Map<String, Object> save(@RequestBody User user) {
        Map<String, Object> result = new HashMap<>();
        result.put("success", true);
        result.put("msg", "添加成功");
        return result;
    }

    @GetMapping("user")
    public User user(@RequestParam("id") int id) {
        System.out.println(id);
        return new User(id, "小x", 11, "程序员");
    }

    @GetMapping("demo")
    public String demo() {
        System.out.println("demo...");
        return "demo ok";
    }
}
