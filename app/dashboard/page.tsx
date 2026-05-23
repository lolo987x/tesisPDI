"use client"
 
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
 Table, TableBody, TableCell,
 TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
 LayoutDashboard, Users, Utensils, GraduationCap,
 Share2, HeartHandshake, BarChart2, UserCheck,
 Settings, Shield, Plus, Bell, Search,
 Calendar, Download, ClipboardList, FileText, CheckCircle,
 ArrowUpRight, AlertTriangle, RefreshCw, Expand,
} from "lucide-react"
 
// ─── Datos ────────────────────────────────────────────────────────────────────
 
const navItems = [
 { label: "Principal", href: "/dashboard", icon: LayoutDashboard },
 { label: "Data de Usuarios", href: "/dashboard/usuarios", icon: Users },
 { label: "Servicio Alimentario Nutricional", href: "/dashboard/alimentario", icon: Utensils },
 { label: "Servicio Acompañamiento Educativo", href: "/dashboard/educativo", icon: GraduationCap },
 { label: "Derivación ASP", href: "/dashboard/derivacion", icon: Share2 },
 { label: "Atención", href: "/dashboard/atencion", icon: HeartHandshake },
 { label: "Reportes", href: "/dashboard/reportes", icon: BarChart2 },
 { label: "Voluntarios / Responsables", href: "/dashboard/voluntarios", icon: UserCheck },
]
 
const systemItems = [
 { label: "Configuración", href: "/dashboard/config", icon: Settings },
 { label: "Usuarios y Roles", href: "/dashboard/roles", icon: Shield },
]
 
const stats = [
 {
 label: "USUARIOS ACTIVOS",
 value: "1,248",
 trend: "+12% vs mes anterior",
 trendUp: true,
 icon: Users,
 iconBg: "bg-blue-100",
 iconColor: "text-blue-500",
 valueColor: "text-blue-600",
 trendColor: "text-blue-500",
 },
 {
 label: "SERVICIOS ACTIVOS",
 value: "452",
 trend: "+5% vs mes anterior",
 trendUp: true,
 icon: CheckCircle,
 iconBg: "bg-green-100",
 iconColor: "text-green-500",
 valueColor: "text-green-500",
 trendColor: "text-green-500",
 },
 {
 label: "FICHAS PENDIENTES",
 value: "87",
 trend: "Requieren atención",
 trendUp: false,
 icon: ClipboardList,
 iconBg: "bg-orange-100",
 iconColor: "text-orange-500",
 valueColor: "text-orange-500",
 trendColor: "text-orange-500",
 },
 {
 label: "REPORTES",
 value: "34",
 trend: "Generados esta semana",
 trendUp: true,
 icon: FileText,
 iconBg: "bg-purple-100",
 iconColor: "text-purple-500",
 valueColor: "text-purple-600",
 trendColor: "text-purple-500",
 },
]
 
const quickStats = [
 { label: "Atenciones Hoy", value: "48", bg: "bg-blue-50", color: "text-blue-600" },
 { label: "Raciones Servidas", value: "320", bg: "bg-emerald-50", color: "text-emerald-600" },
 { label: "Voluntarios Activos", value: "19", bg: "bg-violet-50", color: "text-violet-600" },
 { label: "Derivaciones ASP", value: "12", bg: "bg-amber-50", color: "text-amber-600" },
]
 
const activities = [
 {
 user: "María Aguilar", initials: "MA", color: "bg-blue-500",
 accion: "Actualización de ficha nutricional",
 modulo: "Servicio Alimentario", estado: "Completado", fecha: "Hace 2 horas",
 },
 {
 user: "Juan Perez", initials: "JP", color: "bg-teal-500",
 accion: "Registro de nueva derivación",
 modulo: "Derivación ASP", estado: "Pendiente", fecha: "Hace 5 horas",
 },
 {
 user: "Lucía Ríos", initials: "LR", color: "bg-violet-500",
 accion: "Nuevo registro de usuario",
 modulo: "Data de Usuarios", estado: "Completado", fecha: "Hace 6 horas",
 },
 {
 user: "Carlos Mamani", initials: "CM", color: "bg-orange-400",
 accion: "Actualización de reporte mensual",
 modulo: "Reportes", estado: "En proceso", fecha: "Ayer, 14:30",
 },
 {
 user: "Sandra Torres", initials: "ST", color: "bg-pink-400",
 accion: "Sesión de acompañamiento registrada",
 modulo: "Acomp. Educativo", estado: "Completado", fecha: "Ayer, 10:15",
 },
]
 
const badgeStyle: Record<string, string> = {
 "Completado": "bg-green-100 text-green-700 border-0 hover:bg-green-100 font-semibold",
 "Pendiente": "bg-orange-100 text-orange-600 border-0 hover:bg-orange-100 font-semibold",
 "En proceso": "bg-blue-100 text-blue-700 border-0 hover:bg-blue-100 font-semibold",
}
 
// ─── Componente principal ─────────────────────────────────────────────────────
 
export default function DashboardPage() {
 const pathname = usePathname()
 const router = useRouter()
 
 return (
 <div className="flex min-h-screen bg-[#f0f2f5]">
 
 {/* ── SIDEBAR ── */}
 <aside className="w-56 min-h-screen bg-[#0d1117] flex flex-col fixed left-0 top-0 bottom-0 z-50 shadow-xl">
 
 {/* Logo */}
 <div className="px-4 py-4 border-b border-slate-800">
 <div className="flex items-center gap-2.5">
 <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
 🏠
 </div>
 <div className="leading-tight">
 <p className="text-white text-[13px] font-bold">Casita del Saber</p>
 <p className="text-slate-500 text-[10px]">2026</p>
 </div>
 </div>
 </div>
 
 {/* Usuario */}
 <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2.5">
 <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0 overflow-hidden">
 {/* foto placeholder */}
 <span className="text-white text-xs font-bold">AU</span>
 </div>
 <div className="leading-tight">
 <p className="text-slate-200 text-[12px] font-semibold">Admin User</p>
 <p className="text-slate-500 text-[10px]">Regional Coordinator</p>
 </div>
 </div>
 
 {/* Nav */}
 <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
 {/* Item Principal con estilo activo */}
 {navItems.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 className={cn(
 "flex items-center gap-2.5 px-3 py-[7px] rounded-lg text-[12px] font-medium transition-colors",
 pathname === item.href
 ? "bg-blue-600 text-white"
 : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
 )}
 >
 <item.icon className="w-3.5 h-3.5 shrink-0" />
 <span className="truncate">{item.label}</span>
 </Link>
 ))}
 
 <div className="pt-3">
 {systemItems.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 className={cn(
 "flex items-center gap-2.5 px-3 py-[7px] rounded-lg text-[12px] font-medium transition-colors",
 pathname === item.href
 ? "bg-blue-600 text-white"
 : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
 )}
 >
 <item.icon className="w-3.5 h-3.5 shrink-0" />
 <span className="truncate">{item.label}</span>
 </Link>
 ))}
 </div>
 </nav>
 
 {/* Footer botón */}
 <div className="p-3 border-t border-slate-800">
 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[12px] h-8 rounded-lg font-semibold">
 <Plus className="w-3.5 h-3.5 mr-1.5" /> Nuevo Registro
 </Button>
 </div>
 </aside>
 
 {/* ── MAIN ── */}
 <div className="ml-56 flex-1 flex flex-col">
 
 {/* Topbar */}
 <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-end gap-2 px-6 sticky top-0 z-40">
 <Button variant="ghost" size="icon" className="text-slate-400 w-8 h-8">
 </Button>
 <Button variant="ghost" size="icon" className="relative text-slate-400 w-8 h-8">
 </Button>
 <div className="flex items-center gap-1.5 ml-1">
 <button
 onClick={() => router.push("/login")}
 className="text-[12px] font-semibold text-red-500 hover:underline ml-1"
 >
 
 </button>
 </div>
 </header>
 
 {/* Contenido */}
 <main className="p-6 space-y-5">
 
 {/* Encabezado */}
 <div className="flex items-start justify-between">
 <div>
 <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
 Dashboard Principal
 </h1>
 <p className="text-[13px] text-slate-500 mt-0.5">
 Resumen general de las operaciones institucionales.
 </p>
 </div>
 <div className="flex items-center gap-2">
 <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 text-[12px] h-8 gap-1.5">
 <Calendar className="w-3.5 h-3.5 text-blue-500" />
 Últimos 30 días
 </Button>
 <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[12px] h-8 gap-1.5">
 <Download className="w-3.5 h-3.5" />
 Exportar
 </Button>
 </div>
 </div>
 
 {/* Tarjetas de estadísticas */}
 <div className="grid grid-cols-4 gap-4">
 {stats.map((s) => (
 <Card key={s.label} className="border-slate-200 shadow-sm bg-white rounded-xl">
 <CardContent className="p-5">
 <div className="flex items-start justify-between mb-3">
 <span className="text-[10px] font-bold tracking-widest text-slate-400">
 {s.label}
 </span>
 <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", s.iconBg)}>
 <s.icon className={cn("w-4 h-4", s.iconColor)} />
 </div>
 </div>
 <p className={cn("text-[32px] font-extrabold tracking-tight leading-none mb-2", s.valueColor)}>
 {s.value}
 </p>
 <p className={cn("text-[11px] font-semibold flex items-center gap-1", s.trendColor)}>
 {s.trendUp
 ? <ArrowUpRight className="w-3 h-3" />
 : <AlertTriangle className="w-3 h-3" />
 }
 {s.trend}
 </p>
 </CardContent>
 </Card>
 ))}
 </div>
 
 {/* Estado global + métricas rápidas */}
 <div className="grid grid-cols-[1fr_220px] gap-4">
 <Card className="border-slate-200 shadow-sm bg-white rounded-xl">
 <CardHeader className="pb-2 pt-4 px-5">
 <div className="flex items-center justify-between">
 <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
 Estado de Usuarios Global
 </CardTitle>
 <button className="text-slate-300 hover:text-slate-500">
 <Expand className="w-3.5 h-3.5" />
 </button>
 </div>
 </CardHeader>
 <CardContent className="px-5 pb-5 space-y-4">
 {/* Activos */}
 <div>
 <div className="flex justify-between text-[12px] mb-1.5">
 <span className="text-slate-500">Usuarios Activos (85%)</span>
 <span className="font-bold text-slate-800">1,248</span>
 </div>
 <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full w-[85%] bg-blue-600 rounded-full" />
 </div>
 </div>
 {/* No activos */}
 <div>
 <div className="flex justify-between text-[12px] mb-1.5">
 <span className="text-slate-500">Usuarios No Activos (15%)</span>
 <span className="font-bold text-slate-800">214</span>
 </div>
 <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full w-[15%] bg-slate-400 rounded-full" />
 </div>
 </div>
 {/* Total box */}
 <div className="rounded-xl bg-[#1a2744] p-5 text-center mt-2">
 <p className="text-[36px] font-extrabold text-white tracking-tight leading-none">1,462</p>
 <p className="text-slate-400 text-[11px] mt-1.5">Total Registrados</p>
 </div>
 </CardContent>
 </Card>
 
 {/* Métricas rápidas */}
 <div className="space-y-3">
 {quickStats.map((m) => (
 <div key={m.label}
 className="bg-white rounded-xl border border-slate-200 shadow-sm px-4 py-3.5">
 <p className="text-[11px] text-slate-400 font-medium">{m.label}</p>
 <p className={cn("text-[22px] font-extrabold mt-0.5", m.color)}>{m.value}</p>
 </div>
 ))}
 </div>
 </div>
 
 {/* Tabla actividad reciente */}
 <Card className="border-slate-200 shadow-sm bg-white rounded-xl">
 <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
 <CardTitle className="text-[15px] font-bold text-slate-800">
 Actividad Reciente
 </CardTitle>
 <a href="#" className="text-[12px] font-semibold text-blue-600 hover:underline">
 Ver todo
 </a>
 </CardHeader>
 <CardContent className="p-0">
 <Table>
 <TableHeader>
 <TableRow className="hover:bg-transparent border-slate-100">
 <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-5">Usuario</TableHead>
 <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Acción</TableHead>
 <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Módulo</TableHead>
 <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Estado</TableHead>
 <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fecha</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {activities.map((a) => (
 <TableRow key={a.user} className="hover:bg-slate-50 border-slate-100">
 <TableCell className="pl-5 py-3">
 <div className="flex items-center gap-2.5">
 <div className={cn(
 "w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0",
 a.color
 )}>
 {a.initials}
 </div>
 <span className="font-semibold text-[13px] text-slate-800">{a.user}</span>
 </div>
 </TableCell>
 <TableCell className="text-[13px] text-slate-600 py-3">{a.accion}</TableCell>
 <TableCell className="text-[13px] text-slate-600 py-3">{a.modulo}</TableCell>
 <TableCell className="py-3">
 <Badge className={badgeStyle[a.estado]}>{a.estado}</Badge>
 </TableCell>
 <TableCell className="text-[12px] text-slate-400 py-3">{a.fecha}</TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </CardContent>
 </Card>
 
 </main>
 </div>
 </div>
 )
}