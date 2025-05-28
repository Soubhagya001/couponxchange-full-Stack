package com.example.couponxchange.service;

import com.example.couponxchange.model.Coupon;
import com.example.couponxchange.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponService {
    @Autowired
    private CouponRepository repo;

    public List<Coupon> getAll() {
        return repo.findAll();
    }

    public Coupon save(Coupon coupon) {
        return repo.save(coupon);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
