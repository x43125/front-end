package com.wx.vue_day3_admin.service;

import com.wx.vue_day3_admin.entity.User;

import java.util.List;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
public interface UserService {
    /**
     * 查找所有用户
     * @return
     */
    List<User> findAll();

    /**
     * 插入一条新数据
     * @param user
     */
    void save(User user);

    /**
     * 更新数据
     * @param user
     */
    void update(User user);

    /**
     * 根据用户id获取用户
     * @param userId
     * @return
     */
    User findByUserId(Integer userId);
}
