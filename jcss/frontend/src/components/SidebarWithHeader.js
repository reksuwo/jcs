import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Avatar,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTruck,
  FiClipboard,
  FiUsers,
  FiCalendar,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineInventory2, MdOutlineDashboard } from "react-icons/md";
import { BsReceiptCutoff } from "react-icons/bs";
import dynamic from "next/dynamic"; // Dynamic import for scheduler.js

// Dynamically import components
const Scheduler = dynamic(() => import("../pages/scheduler"), { ssr: false });
const Waybill = dynamic(() => import("../pages/waybill"), { ssr: false });
const Dashboard = dynamic(() => import("../components/dashboard"), {
  ssr: false,
});

// Sidebar Navigation Links
const linkItems = [
  { name: "Dashboard", icon: MdOutlineDashboard },
  { name: "Waybill Management", icon: BsReceiptCutoff },
  { name: "Billing", icon: IoReceiptOutline },
  { name: "Vehicle", icon: FiTruck },
  { name: "Payroll Processing", icon: FiClipboard },
  { name: "User Accounts", icon: FiUsers },
  { name: "Employee Records", icon: FaUserTie },
  { name: "Scheduler", icon: FiCalendar },
  { name: "Inventory", icon: MdOutlineInventory2 },
];

// Sidebar Content Component
const SidebarContent = ({ setActivePage }) => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={60}
      pos="fixed"
      h="100vh"
      overflow="hidden"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Avatar
          width="70px"
          height="70px"
          src="/AVATAR.png"
          name="Justina Clark"
          marginLeft="50px"
        />
      </Flex>
      <Box h="59" />
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          isActive={activeLink === link.name}
          onClick={() => {
            setActivePage(link.name);
            setActiveLink(link.name);
          }}
          mb="6"
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

// Navigation Item Component
const NavItem = ({ icon, children, isActive, onClick, ...rest }) => (
  <Box
    as="a"
    href="#"
    style={{ textDecoration: "none" }}
    _focus={{ boxShadow: "none" }}
    onClick={onClick}
  >
    <Flex
      align="center"
      p="2"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      bg={isActive ? "#550000" : "transparent"}
      color={isActive ? "white" : "inherit"}
      _hover={{ bg: "#550000", color: "white" }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="3"
          fontSize="20"
          color={isActive ? "white" : "inherit"}
          as={icon}
        />
      )}
      <Text
        fontSize="sm"
        fontWeight="medium"
        fontFamily="'Poppins', sans-serif"
        color={isActive ? "white" : "gray.600"}
      >
        {children}
      </Text>
    </Flex>
  </Box>
);

// Desktop Header Component
const DesktopHeader = () => (
  <Flex
    px={4}
    height="20"
    alignItems="center"
    bg={useColorModeValue("white", "gray.900")}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    justifyContent="flex-end"
  >
    <IconButton
      size="lg"
      variant="ghost"
      aria-label="open menu"
      icon={<FiBell />}
    />
    <Flex alignItems="center" ml={4}>
      <Menu>
        <MenuButton py={2} transition="all 0.3s">
          <HStack>
            <Avatar
              size="sm"
              src="https://images.unsplash.com/photo-1619946794135-5bc917a27793"
            />
            <VStack display="flex" alignItems="flex-start" spacing="1px" ml="2">
              <Text fontSize="sm">Justina Clark</Text>
              <Text fontSize="xs" color="gray.600">
                Admin
              </Text>
            </VStack>
            <Box>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuDivider />
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

// Sidebar With Header Component
const SidebarWithHeader = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("white", "gray.900")}
      overflow="hidden"
    >
      <SidebarContent setActivePage={setActivePage} />
      <DesktopHeader />
      <Box ml={60} p="4" h="calc(100vh - 80px)" overflow="hidden">
        {activePage === "Scheduler" && <Scheduler />}
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Waybill Management" && <Waybill />}
        {!activePage && <Text>Select a page to load content.</Text>}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
