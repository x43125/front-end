package com.wx.vue_day3_admin.service.impl;

import com.wx.vue_day3_admin.dao.UserDao;
import com.wx.vue_day3_admin.entity.User;
import com.wx.vue_day3_admin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/**
 * @Descrption:
 * @Author: x43125
 * @Date: 21/06/12
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired(required = false)
    private UserDao userDao;

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public void save(User user) {
        userDao.save(user);
    }

    @Override
    public void update(User user) {
        userDao.update(user);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public User findByUserId(Integer userId) {
        return userDao.findByUserId(userId);
    }

    @Override
    public void deleteUserById(Integer userId) {
        userDao.deleteUserById(userId);
    }

    @Override
    public User findByUserName(String name) {
        return userDao.findByUserName(name);
    }
}
