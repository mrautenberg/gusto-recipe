import * as React from "react"
import { useContext } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@mui/styles"
import { styled, useTheme } from "@mui/material/styles"

import AuthContext from "@/context/AuthContext"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

import HomeIcon from "@mui/icons-material/Home"
import KitchenIcon from "@mui/icons-material/Kitchen"
import SettingsIcon from "@mui/icons-material/Settings"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import Grid from "@mui/material/Grid"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginRight: 0,
		}),
	})
)

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}))

const useStyles = makeStyles({
	active: {
		background: "#e5e5e5",
	},
})

export default function Header() {
	const classes = useStyles()

	const { user, logout } = useContext(AuthContext)

	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const router = useRouter()

	const menuItems = [
		{
			text: "Hem",
			icon: <HomeIcon />,
			path: "/",
		},
		{
			text: "Recept",
			icon: <MenuBookIcon />,
			path: "/recipes",
		},
		{
			text: "Pantry",
			icon: <KitchenIcon />,
			path: "/account/pantry",
		},
		{
			text: "Inst??llningar",
			icon: <SettingsIcon />,
			path: "/account/settings",
		},
		// Would be nice to put in map but didn't work with logout func
		// {
		//   text: "Logout",
		//   icon: <LogoutIcon />,
		//   path: "/account/login",
		// },
	]

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<Grid container>
						<Grid item xs={10}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={() => router.back()}
								sx={{ flexGrow: 1, ...(open && { display: "none" }) }}
							>
								<ChevronLeftIcon />
							</IconButton>
						</Grid>
						<Grid
							item
							xs={2}
							sx={{ display: "flex", justifyContent: "flex-end" }}
						>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								sx={{ ...(open && { display: "none" }) }}
							>
								<MenuIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Main open={open}>
				<DrawerHeader />
			</Main>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
					},
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>

				<List>
					{user ? (
						<>
							{menuItems.map((item) => (
								<ListItem
									button
									key={item.text}
									onClick={() => router.push(item.path)}
									className={
										location.pathname == item.path ? classes.active : null
									}
								>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.text} />
								</ListItem>
							))}
							<ListItem button key={"logout"} onClick={() => logout()}>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary="Logga ut" />
							</ListItem>
						</>
					) : (
						<>
							<ListItem onClick={() => router.push("/account/login")}>
								<ListItemIcon>
									<LoginIcon />
								</ListItemIcon>
								<ListItemText primary="Logga in" />
							</ListItem>
						</>
					)}
				</List>
			</Drawer>
		</Box>
	)
}
