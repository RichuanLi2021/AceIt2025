import IconCreateDashboard from "public/menue_logo/dashboard_logo";
import IconPresentationAnalytics from "public/menue_logo/analytics_logo";
import IconWorkAlt from "public/menue_logo/applied_logo";
import IconPersonWorkspace from "public/menue_logo/interview_log";
import IconProfile from "@/public/menue_logo/profile_logo";
import IconSettingsOutline from "@/public/menue_logo/setting_logo";
import IconLogoutCircleRLine from "@/public/menue_logo/logout_logo";
import { ReactElement, ReactNode } from "react";

type Items_type = {
    icon: ReactNode, //can also be ReactElement
    label: string,
    href: string
}

interface Side_bar_data_type {
    id: number;
    title: string;
    items: Items_type[]
}

export const Side_bar_data: Side_bar_data_type[] =[
    {
        id: 1,
        title: "Side_bar",
        items: [
            {
                icon: <IconCreateDashboard/>, //since icon is returned as a JSX Element, which is a React node/element
                label: "Dashboard",
                href: ""
            },
            {
                icon: <IconPresentationAnalytics/>,
                label: "Analytics",
                href: ""
            },
            {
                icon: <IconWorkAlt/>,
                label: "Applied",
                href: ""
            },
            {
                icon: <IconPersonWorkspace/>,
                label: "Interview",
                href: ""
            }
        ]
    },

    {
        id: 2,
        title: "others",
        items: [
            {
                icon: <IconProfile/>,
                label: "profile",
                href: "/public/menue_logo"
            },

            {
                icon: <IconSettingsOutline/>,
                label: "setting",
                href: "/public/menue_logo"
            },

            {
                icon: <IconLogoutCircleRLine/>,
                label: "logout",
                href: "/public/menue_logo"
            }
        ]
    }
]