package com.example.couponxchange.model;

import jakarta.persistence.*;

@Entity
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String platform;
    private int originalValue;
    private int sellingPrice;
    private String discount;
    private String expiryDate;
    private String seller;
    private double rating;
    private String category;
    private int verified;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public int getOriginalValue() { return originalValue; }
    public void setOriginalValue(int originalValue) { this.originalValue = originalValue; }

    public int getSellingPrice() { return sellingPrice; }
    public void setSellingPrice(int sellingPrice) { this.sellingPrice = sellingPrice; }

    public String getDiscount() { return discount; }
    public void setDiscount(String discount) { this.discount = discount; }

    public String getExpiryDate() { return expiryDate; }
    public void setExpiryDate(String expiryDate) { this.expiryDate = expiryDate; }

    public String getSeller() { return seller; }
    public void setSeller(String seller) { this.seller = seller; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public int getVerified() { return verified; }
    public void setVerified(int verified) { this.verified = verified; }
}
