"use client"

import * as React from "react"

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
    { title: "Data de Usuarios", url: "/usuarios", icon: Users2 },
    { title: "Servicio Alimentario Nutricional", url: "/nutricion", icon: Utensils },
    { title: "Servicio Acompañamiento Educativo", url: "/educacion", icon: GraduationCap },
    { title: "Derivación ASP", url: "/derivacion", icon: FolderHeart },
    { title: "Atención", url: "/atencion", icon: UserCheck },
    { title: "Reportes", url: "/reportes", icon: BarChart3 },
    { title: "Voluntarias / Responsables", url: "/personal", icon: UserCog },
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
      className="border-r border-slate-100 bg-[#f8f9fa]"
      {...props}
    >
      
      <SidebarHeader className="px-5 pt-6">
        <h1 className="text-xl font-bold tracking-tight text-[#0f3087]">
          Casita del Saber 2026
        </h1>
      </SidebarHeader>

      <SidebarContent className="px-3">

        <SidebarGroup className="pt-2 pb-4">
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
            <Plus className="h-5 w-5 stroke-[3]" />

            <span className="text-sm">
              Nuevo Registro
            </span>
          </Button>
        </SidebarGroup>

        <SidebarGroup>
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
                        flex items-center gap-3
                        rounded-xl
                        px-4 py-6
                        text-xs font-medium
                        transition-all duration-200

                        hover:bg-slate-100
                        hover:text-slate-900
                        hover:shadow-sm

                        active:scale-[0.98]
                        active:shadow-inner

                        ${
                          isActive
                            ? "bg-[#2244a3] text-white shadow-md shadow-blue-900/10 hover:bg-[#2244a3] hover:text-white"
                            : "text-slate-600"
                        }
                      `}
                    >
                      <a href={item.url}>

                        <item.icon
                          className={`
                            h-5 w-5 shrink-0
                            ${isActive ? "text-white" : "text-slate-500"}
                          `}
                        />

                        <span>{item.title}</span>

                      </a>
                    </SidebarMenuButton>

                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto" />

        <SidebarSeparator className="mx-2 my-2 bg-slate-200" />

        <SidebarGroup className="pb-4">
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
                        flex items-center gap-3
                        rounded-xl
                        px-4 py-5
                        text-xs font-medium
                        transition-all duration-200

                        hover:bg-slate-100
                        hover:text-slate-900
                        hover:shadow-sm

                        active:scale-[0.98]
                        active:shadow-inner

                        ${
                          isActive
                            ? "bg-[#2244a3] text-white shadow-md shadow-blue-900/10"
                            : "text-slate-600"
                        }
                      `}
                    >
                      <a href={item.url}>

                        <item.icon
                          className={`
                            h-5 w-5 shrink-0
                            ${isActive ? "text-white" : "text-slate-500"}
                          `}
                        />

                        <span>{item.title}</span>

                      </a>
                    </SidebarMenuButton>

                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}