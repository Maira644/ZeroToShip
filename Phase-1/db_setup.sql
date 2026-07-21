-- ============================================
-- ZeroToShip Summer Activity 2026
-- Phase 1: Database Schema
-- Project: Peer Project Collaboration Platform
-- Author: Maira Asghar
-- ============================================

-- Drop tables if they already exist
DROP TABLE IF EXISTS Applications CASCADE;
DROP TABLE IF EXISTS Projects CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

-- ============================================
-- Users Table
-- Stores information about registered students.
-- ============================================
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    department VARCHAR(100) NOT NULL,
    skills TEXT[] NOT NULL
);

-- ============================================
-- Projects Table
-- Stores projects created by users.
-- ============================================
CREATE TABLE Projects (
    project_id SERIAL PRIMARY KEY,
    creator_id INTEGER NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    required_skills TEXT[] NOT NULL,
    status VARCHAR(20) NOT NULL
        CHECK (status IN ('Open', 'Closed')),
    FOREIGN KEY (creator_id)
        REFERENCES Users(user_id)
);

-- ============================================
-- Applications Table
-- Stores applications submitted by users.
-- ============================================
CREATE TABLE Applications (
    application_id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    applicant_id INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL
        CHECK (status IN ('Pending', 'Approved', 'Rejected')),
    FOREIGN KEY (project_id)
        REFERENCES Projects(project_id),
    FOREIGN KEY (applicant_id)
        REFERENCES Users(user_id)
);