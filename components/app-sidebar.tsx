"use client"

import * as React from "react"
import Link from "next/link"

import {
  LayoutDashboard,
  Users2,
  Utensils,
  GraduationCap,
  FolderHeart,
  UserCheck,
  BarChart3,
  UserCog,
  Settings,
  ShieldCheck,
  Plus,
} from "lucide-react"

import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"

const data = {
  navMain: [
    { title: "Principal", url: "/dashboard", icon: LayoutDashboard },
    { title: "Data de Usuarios", url: "/dashboard/datausers", icon: Users2 },
    { title: "Servicio Alimentario Nutricional", url: "/dashboard/servicioalimenticio", icon: Utensils },
    { title: "Servicio Acompañamiento Educativo", url: "/dashboard/servicioeducativo", icon: GraduationCap },
    { title: "Derivación ASP", url: "/dashboard/derivacionASP", icon: FolderHeart },
    { title: "Atención", url: "/dashboard/atencion", icon: UserCheck },
    { title: "Reportes", url: "/dashboard/reportes", icon: BarChart3 },
    { title: "Voluntarias / Responsables", url: "/dashboard/responsables", icon: UserCog },
  ],

  navFooter: [
    { title: "Configuración", url: "/configuracion", icon: Settings },
    { title: "Usuarios y Roles", url: "/roles", icon: ShieldCheck },
  ],
}

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {

  const pathname = usePathname()

  return (
    <Sidebar
      className="
        border-r
        border-slate-100
        bg-[#f8f9fa]
        font-[Inter]
      "
      {...props}
    >

      <SidebarHeader className="px-4 pt-5 pb-2">

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-[#0f3087]
              text-sm
              font-bold
              text-white
            "
          >
            AU
          </div>

          <div className="leading-tight">

            <h2 className="text-sm font-semibold text-[#0f3087]">
              Admin User
            </h2>

            <p className="text-[11px] text-slate-500">
              Region's Coordinator
            </p>

          </div>

        </div>

      </SidebarHeader>

      <SidebarContent className="px-2">

        <SidebarGroup className="pt-2">

          <SidebarGroupContent>

            <SidebarMenu className="gap-1">

              {data.navMain.map((item) => {

                const isActive = item.url === pathname

                return (
                  <SidebarMenuItem key={item.title}>

                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`
                        rounded-lg
                        px-3
                        py-5
                        transition-all
                        duration-200

                        hover:bg-slate-100
                        hover:text-slate-900

                        ${
                          isActive
                            ? "bg-[#4f67b7] text-white hover:bg-[#4f67b7] hover:text-white"
                            : "text-slate-700"
                        }
                      `}
                    >

                      <Link
                        href={item.url}
                        className="flex items-start gap-3"
                      >

                        <item.icon
                          className={`
                            mt-[1px]
                            h-4
                            w-4
                            shrink-0
                            ${
                              isActive
                                ? "text-white"
                                : "text-slate-500"
                            }
                          `}
                        />

                        <span
                          className="
                            text-[11px]
                            font-medium
                            leading-[1.15]
                            tracking-tight
                          "
                        >
                          {item.title}
                        </span>

                      </Link>

                    </SidebarMenuButton>

                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>

          </SidebarGroupContent>

        </SidebarGroup>

        <div className="mt-auto" />

        <SidebarSeparator className="mx-2 my-3 bg-slate-200" />

        <SidebarGroup className="pb-3">

          <SidebarGroupContent>

            <SidebarMenu className="gap-1">

              {data.navFooter.map((item) => {

                const isActive = item.url === pathname

                return (
                  <SidebarMenuItem key={item.title}>

                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`
                        rounded-lg
                        px-3
                        py-5
                        transition-all
                        duration-200

                        hover:bg-slate-100
                        hover:text-slate-900

                        ${
                          isActive
                            ? "bg-[#4f67b7] text-white"
                            : "text-slate-700"
                        }
                      `}
                    >

                      <Link
                        href={item.url}
                        className="flex items-start gap-3"
                      >

                        <item.icon
                          className={`
                            mt-[1px]
                            h-4
                            w-4
                            shrink-0
                            ${
                              isActive
                                ? "text-white"
                                : "text-slate-500"
                            }
                          `}
                        />

                        <span
                          className="
                            text-[11px]
                            font-medium
                            leading-[1.15]
                            tracking-tight
                          "
                        >
                          {item.title}
                        </span>

                      </Link>

                    </SidebarMenuButton>

                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>

          </SidebarGroupContent>

        </SidebarGroup>

        <div className="px-2 pb-4">

          <Button
            className="
              w-full
              rounded-lg
              bg-[#002884]
              py-5
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200

              hover:bg-[#001f66]
              hover:shadow-md

              active:scale-[0.98]
              active:shadow-inner

              flex items-center justify-center gap-2
            "
            onClick={() => console.log("Nuevo registro")}
          >

            <Plus className="h-4 w-4 stroke-[3]" />

            <span className="text-xs">
              Nuevo Registro
            </span>

          </Button>

        </div>

      </SidebarContent>

    </Sidebar>
  )
}