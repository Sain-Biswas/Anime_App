"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Switch } from "./ui/switch"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    function toggle() {
        if (theme === 'dark')
            setTheme('light');
        else
            setTheme('dark');
    }

    return (
        <div className="flex items-center space-x-1 p-1">
            <SunIcon className="w-5 h-5" />
            <Switch
                checked={(theme === 'dark') ? true : false}
                onCheckedChange={toggle}
            />
            <MoonIcon className="w-5 h-5" />
        </div>
    )
}
