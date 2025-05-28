package com.example.couponxchange.controller;

import com.example.couponxchange.model.Coupon;
import com.example.couponxchange.service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coupons")
@CrossOrigin(origins = "*")
public class CouponController {

    @Autowired
    private CouponService service;

    @GetMapping
    public List<Coupon> getCoupons() {
        return service.getAll();
    }

    @PostMapping
    public Coupon createCoupon(@RequestBody Coupon coupon) {
        return service.save(coupon);
    }

    @DeleteMapping("/{id}")
    public void deleteCoupon(@PathVariable Long id) {
        service.delete(id);
    }
}
