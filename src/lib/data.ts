import {
  Cctv, Network, Wifi, Sun, RotateCw, MoonStar, Camera, CircleDot, Flame, Fingerprint,
  BatteryCharging, HardDrive, Cable, Router, Wrench, Settings, Smartphone, ShieldCheck,
  ArrowUpCircle, MessagesSquare, type LucideIcon,
} from "lucide-react";

export type Category = { name: string; desc: string; icon: LucideIcon; items?: string[] };

export const categories: Category[] = [
  { name: "HD CCTV Cameras", icon: Cctv, desc: "High-definition security cameras for homes, shops, offices, warehouses, and commercial properties.", items: ["2MP HD Cameras", "5MP HD Cameras", "8MP HD Cameras"] },
  { name: "IP Cameras", icon: Network, desc: "Network-based surveillance cameras designed for detailed monitoring and flexible security installations.", items: ["2MP IP Cameras", "5MP IP Cameras", "8MP IP Cameras"] },
  { name: "Wi-Fi Cameras", icon: Wifi, desc: "Wireless network cameras for convenient monitoring through compatible mobile applications." },
  { name: "Solar CCTV Cameras", icon: Sun, desc: "Solar-powered surveillance solutions for suitable outdoor locations and areas with limited power access." },
  { name: "360-Degree Cameras", icon: RotateCw, desc: "Panoramic or pan-tilt cameras for monitoring wider areas. Coverage depends on the specific model." },
  { name: "Smart & Colour Night Vision Cameras", icon: MoonStar, desc: "Cameras with night vision and colour imaging capabilities, depending on the selected model." },
  { name: "Bullet Cameras", icon: Camera, desc: "Suitable for outdoor entrances, building perimeters, parking areas, and other monitoring locations." },
  { name: "Dome Cameras", icon: CircleDot, desc: "Compact cameras suitable for indoor spaces, offices, retail shops, and commercial buildings." },
  { name: "Fire Alarm Systems", icon: Flame, desc: "Fire detection and alarm equipment for residential, commercial, and industrial applications." },
  { name: "Biometric Systems", icon: Fingerprint, desc: "Fingerprint, facial recognition, and access-control devices for attendance and entry management, depending on the model." },
  { name: "UPS & Power Backup", icon: BatteryCharging, desc: "Backup power solutions for CCTV systems, networking equipment, and other compatible devices." },
  { name: "CCTV DVR & NVR", icon: HardDrive, desc: "Recording and monitoring devices for compatible HD and IP camera systems." },
  { name: "CCTV Accessories", icon: Cable, desc: "Everything needed to complete a clean installation.", items: ["Surveillance hard disks", "CCTV cables", "BNC & DC connectors", "Power supplies", "Mounting boxes", "Network switches", "Video baluns", "Other installation accessories"] },
  { name: "Networking Products", icon: Router, desc: "Networking equipment and accessories required for IP cameras and surveillance installations." },
];

export const brands = [
  { name: "CP PLUS", url: "https://www.cpplusworld.com/" },
  { name: "Hikvision", url: "https://www.hikvision.com/" },
  { name: "Prama", url: "https://www.pramaindia.in/" },
  { name: "Dahua", url: "https://www.dahuasecurity.com/" },
  { name: "Honeywell", url: "https://buildings.honeywell.com/" },
  { name: "Matrix" },
  { name: "Secureye" },
  { name: "Godrej Security Solutions" },
] as { name: string; url?: string }[];

export const services: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: "CCTV Camera Sales", icon: Cctv, desc: "HD, IP, Wi-Fi and solar cameras for every property." },
  { name: "CCTV Camera Installation", icon: Wrench, desc: "Neat cabling, mounting and setup by our team." },
  { name: "Maintenance & Troubleshooting", icon: Settings, desc: "Fixing faults, poor footage and recording issues." },
  { name: "CCTV System Upgrades", icon: ArrowUpCircle, desc: "Move to higher resolution or add more cameras." },
  { name: "DVR & NVR Configuration", icon: HardDrive, desc: "Recording schedules, storage and channel setup." },
  { name: "Remote Viewing Setup", icon: Smartphone, desc: "Watch your cameras on your phone from anywhere." },
  { name: "Wi-Fi Camera Setup", icon: Wifi, desc: "Pairing wireless cameras with the mobile app." },
  { name: "IP Camera Networking", icon: Network, desc: "Switches, cabling and network setup for IP systems." },
  { name: "Fire Alarm Supply & Installation", icon: Flame, desc: "Detectors and alarm panels for your premises." },
  { name: "Biometric Attendance Setup", icon: Fingerprint, desc: "Attendance and access-control device installation." },
  { name: "UPS & Power Backup", icon: BatteryCharging, desc: "Keep cameras recording during power cuts." },
  { name: "Security Consultation", icon: MessagesSquare, desc: "Advice on the right system for your property." },
];

export const trust = [
  { label: "CCTV Sales & Installation", icon: Cctv },
  { label: "Multiple Security Brands", icon: ShieldCheck },
  { label: "Home & Business Solutions", icon: Camera },
  { label: "Customer Support", icon: MessagesSquare },
];
