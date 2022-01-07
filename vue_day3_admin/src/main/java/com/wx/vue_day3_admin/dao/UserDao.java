package com.wx.vue_day3_admin.dao;

import com.wx.vue_day3_admin.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
public interface UserDao {
    /**
     * 查询所有用户
     * @return
     */
    List<User> findAll();

    /**
     * 添加
     * @param user
     */
    void save(User user);

    /**
     * 更新
     * @param user
     */
    void update(User user);

    /**
     * 根据用户id获取用户
     * @param userId
     * @return
     */
    User findByUserId(Integer userId);

    /**
     * 根据用户id删除用户
     * @param userId
     */
    void deleteUserById(Integer userId);

    /**
     * 通过用户名获取用户信息
     * @param name
     * @return
     */
    User findByUserName(String name);
}
