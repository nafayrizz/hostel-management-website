/**
 * =====================================================
 *  Zubair Hall Portal — Central User Database
 *  users_db.js
 *
 *  This file stores all resident and admin accounts.
 *  Data is persisted via localStorage so registrations
 *  survive page reloads within the same browser.
 * =====================================================
 */

const ZUBAIR_DB = (() => {

  /* ── Default seed data ── */
  const DEFAULT_RESIDENTS = [
    {
      username:  "2023-MC-52",
      password:  "resident123",
      role:      "resident",
      profile: {
        fullName:        "Abdul Nafay",
        fatherName:      "Muhammad Nafay",
        cnic:            "35201-XXXXXXX-7",
        regNo:           "2023-MC-52",
        room:            "203",
        floor:           "2nd Floor",
        roomType:        "Double Occupancy",
        checkIn:         "15 April 2025",
        monthlyRent:     8000,
        emergencyPhone:  "+92 321 4567890",
        homeCity:        "Faisalabad, Punjab",
        department:      "MC – UET Lahore",
        email:           "abdulnafay@student.uet.edu.pk",
        status:          "Active"
      },
      feeRecords: [
        { month:"April 2025",     amount:8000, datePaid:"15 Apr 2025", receipt:"ZH-2025-041", status:"Paid" },
        { month:"May 2025",       amount:8000, datePaid:"03 May 2025", receipt:"ZH-2025-051", status:"Paid" },
        { month:"June 2025",      amount:8000, datePaid:"02 Jun 2025", receipt:"ZH-2025-061", status:"Paid" },
        { month:"July 2025",      amount:8000, datePaid:"01 Jul 2025", receipt:"ZH-2025-071", status:"Paid" },
        { month:"August 2025",    amount:8000, datePaid:"04 Aug 2025", receipt:"ZH-2025-081", status:"Paid" },
        { month:"September 2025", amount:8000, datePaid:"01 Sep 2025", receipt:"ZH-2025-091", status:"Paid" },
        { month:"October 2025",   amount:8000, datePaid:"03 Oct 2025", receipt:"ZH-2025-101", status:"Paid" },
        { month:"November 2025",  amount:8000, datePaid:"01 Nov 2025", receipt:"ZH-2025-111", status:"Paid" },
        { month:"December 2025",  amount:8000, datePaid:"02 Dec 2025", receipt:"ZH-2025-121", status:"Paid" },
        { month:"January 2026",   amount:8000, datePaid:"03 Jan 2026", receipt:"ZH-2026-011", status:"Paid" },
        { month:"February 2026",  amount:8000, datePaid:"02 Feb 2026", receipt:"ZH-2026-021", status:"Paid" },
        { month:"March 2026",     amount:8000, datePaid:"01 Mar 2026", receipt:"ZH-2026-031", status:"Paid" },
        { month:"April 2026",     amount:8000, datePaid:"—",           receipt:"—",           status:"Pending" },
        { month:"May 2026",       amount:8000, datePaid:"—",           receipt:"—",           status:"Not Due Yet" }
      ],
      messHistory: {
        "May 2026": {
          totalMeals: 48, totalAmount: 3225,
          days: [
            { date:"01 May", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 May", day:"Fri", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"03 May", day:"Sat", breakfast:false, dinner:true,  amount:75,  payment:"Paid" },
            { date:"04 May", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"05 May", day:"Mon", breakfast:true,  dinner:true,  amount:150, payment:"Pending" },
            { date:"06 May", day:"Tue", breakfast:false, dinner:false, amount:0,   payment:"N/A" },
            { date:"07 May", day:"Wed", breakfast:true,  dinner:true,  amount:150, payment:"Pending" }
          ]
        },
        "April 2026": {
          totalMeals: 52, totalAmount: 3600,
          days: [
            { date:"01 Apr", day:"Tue", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 Apr", day:"Wed", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"03 Apr", day:"Thu", breakfast:false, dinner:true,  amount:75,  payment:"Paid" },
            { date:"04 Apr", day:"Fri", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"05 Apr", day:"Sat", breakfast:false, dinner:false, amount:0,   payment:"N/A" },
            { date:"06 Apr", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"07 Apr", day:"Mon", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"08 Apr", day:"Tue", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"09 Apr", day:"Wed", breakfast:false, dinner:true,  amount:75,  payment:"Paid" },
            { date:"10 Apr", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        },
        "March 2026": {
          totalMeals: 58, totalAmount: 4275,
          days: [
            { date:"01 Mar", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 Mar", day:"Mon", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"03 Mar", day:"Tue", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"04 Mar", day:"Wed", breakfast:false, dinner:true,  amount:75,  payment:"Paid" },
            { date:"05 Mar", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        }
      }
    },
    {
      username:  "2022-EE-14",
      password:  "hassan123",
      role:      "resident",
      profile: {
        fullName:        "Hassan Raza",
        fatherName:      "Raza Ahmed",
        cnic:            "35202-XXXXXXX-3",
        regNo:           "2022-EE-14",
        room:            "105",
        floor:           "1st Floor",
        roomType:        "Single Occupancy",
        checkIn:         "01 September 2022",
        monthlyRent:     10000,
        emergencyPhone:  "+92 300 1234567",
        homeCity:        "Lahore, Punjab",
        department:      "EE – UET Lahore",
        email:           "hassanraza@student.uet.edu.pk",
        status:          "Active"
      },
      feeRecords: [
        { month:"January 2026",  amount:10000, datePaid:"05 Jan 2026", receipt:"ZH-2026-012", status:"Paid" },
        { month:"February 2026", amount:10000, datePaid:"03 Feb 2026", receipt:"ZH-2026-022", status:"Paid" },
        { month:"March 2026",    amount:10000, datePaid:"02 Mar 2026", receipt:"ZH-2026-032", status:"Paid" },
        { month:"April 2026",    amount:10000, datePaid:"01 Apr 2026", receipt:"ZH-2026-042", status:"Paid" },
        { month:"May 2026",      amount:10000, datePaid:"—",           receipt:"—",           status:"Pending" }
      ],
      messHistory: {
        "May 2026": {
          totalMeals: 30, totalAmount: 2250,
          days: [
            { date:"01 May", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 May", day:"Fri", breakfast:false, dinner:true,  amount:75,  payment:"Paid" },
            { date:"03 May", day:"Sat", breakfast:true,  dinner:true,  amount:150, payment:"Pending" }
          ]
        },
        "April 2026": {
          totalMeals: 45, totalAmount: 3375,
          days: [
            { date:"01 Apr", day:"Tue", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 Apr", day:"Wed", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"03 Apr", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        },
        "March 2026": {
          totalMeals: 50, totalAmount: 3750,
          days: [
            { date:"01 Mar", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 Mar", day:"Mon", breakfast:false, dinner:true,  amount:75,  payment:"Paid" }
          ]
        }
      }
    },
    {
      username:  "2024-CS-07",
      password:  "fatima2024",
      role:      "resident",
      profile: {
        fullName:        "Fatima Malik",
        fatherName:      "Malik Aslam",
        cnic:            "35401-XXXXXXX-2",
        regNo:           "2024-CS-07",
        room:            "308",
        floor:           "3rd Floor",
        roomType:        "Double Occupancy",
        checkIn:         "10 February 2024",
        monthlyRent:     8000,
        emergencyPhone:  "+92 333 9876543",
        homeCity:        "Gujranwala, Punjab",
        department:      "CS – UET Lahore",
        email:           "fatimamalik@student.uet.edu.pk",
        status:          "Active"
      },
      feeRecords: [
        { month:"February 2024", amount:8000, datePaid:"10 Feb 2024", receipt:"ZH-2024-021", status:"Paid" },
        { month:"March 2024",    amount:8000, datePaid:"01 Mar 2024", receipt:"ZH-2024-031", status:"Paid" },
        { month:"April 2026",    amount:8000, datePaid:"03 Apr 2026", receipt:"ZH-2026-043", status:"Paid" },
        { month:"May 2026",      amount:8000, datePaid:"02 May 2026", receipt:"ZH-2026-053", status:"Paid" }
      ],
      messHistory: {
        "May 2026": {
          totalMeals: 55, totalAmount: 4125,
          days: [
            { date:"01 May", day:"Thu", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 May", day:"Fri", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"03 May", day:"Sat", breakfast:true,  dinner:false, amount:75,  payment:"Paid" },
            { date:"04 May", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        },
        "April 2026": {
          totalMeals: 58, totalAmount: 4350,
          days: [
            { date:"01 Apr", day:"Tue", breakfast:true,  dinner:true,  amount:150, payment:"Paid" },
            { date:"02 Apr", day:"Wed", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        },
        "March 2026": {
          totalMeals: 52, totalAmount: 3900,
          days: [
            { date:"01 Mar", day:"Sun", breakfast:true,  dinner:true,  amount:150, payment:"Paid" }
          ]
        }
      }
    }
  ];

  const DEFAULT_ADMINS = [
    {
      username: "admin",
      password: "owner123",
      role:     "owner",
      profile: {
        fullName: "Mr. Tariq Mahmood",
        title:    "Warden / Admin",
        initials: "TM"
      }
    }
  ];

  /* ── Storage helpers ── */
  const LS_KEY = "zubair_hall_db";

  function loadDB() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    // First run — seed the defaults
    const fresh = { residents: DEFAULT_RESIDENTS, admins: DEFAULT_ADMINS };
    saveDB(fresh);
    return fresh;
  }

  function saveDB(db) {
    localStorage.setItem(LS_KEY, JSON.stringify(db));
  }

  /* ── Public API ── */
  function authenticate(username, password, role) {
    const db = loadDB();
    if (role === "owner") {
      return db.admins.find(a => a.username === username && a.password === password) || null;
    }
    return db.residents.find(r => r.username === username && r.password === password) || null;
  }

  function getResident(username) {
    return loadDB().residents.find(r => r.username === username) || null;
  }

  function getAllResidents() {
    return loadDB().residents;
  }

  function registerResident(data) {
    const db = loadDB();
    // Check duplicate
    if (db.residents.find(r => r.username === data.username)) {
      return { ok: false, error: "Username / Reg. No. already exists." };
    }
    const newResident = {
      username: data.username,
      password: data.password,
      role:     "resident",
      profile: {
        fullName:       data.fullName,
        fatherName:     data.fatherName  || "—",
        cnic:           data.cnic        || "—",
        regNo:          data.username,
        room:           data.room        || "TBA",
        floor:          data.floor       || "TBA",
        roomType:       data.roomType    || "TBA",
        checkIn:        data.checkIn     || new Date().toLocaleDateString("en-GB", {day:"numeric",month:"long",year:"numeric"}),
        monthlyRent:    parseInt(data.monthlyRent) || 8000,
        emergencyPhone: data.phone       || "—",
        homeCity:       data.homeCity    || "—",
        department:     data.department  || "—",
        email:          data.email       || "—",
        status:         "Active"
      },
      feeRecords:  [],
      messHistory: {}
    };
    db.residents.push(newResident);
    saveDB(db);
    return { ok: true, user: newResident };
  }

  function setSession(user) {
    sessionStorage.setItem("zh_session", JSON.stringify({ username: user.username, role: user.role }));
  }

  function getSession() {
    try { return JSON.parse(sessionStorage.getItem("zh_session")); } catch(e) { return null; }
  }

  function clearSession() {
    sessionStorage.removeItem("zh_session");
  }

  function initials(name) {
    return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2);
  }

  return { authenticate, getResident, getAllResidents, registerResident, setSession, getSession, clearSession, initials, loadDB };
})();
