import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { User, Lock, EyeOff, ArrowRight } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-md mx-auto", className)} {...props}>
      <Card className="rounded-2xl border border-gray-100 shadow-sm p-4">
        <CardHeader className="text-center flex flex-col items-center gap-2 pt-6">
          
          <div className="w-14 h-14 bg-[#1e40af] rounded-full flex items-center justify-center p-2 shadow-inner overflow-hidden">
            <img 
              src="images/logo" 
              alt="Logo de Casita del Saber" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <CardTitle className="text-2xl font-bold text-[#002d74] mt-2">
            Casita del Saber 2026
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 font-medium">
            Proyecto Infancia Saludable
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-4">
          <form className="space-y-5">
            <FieldGroup className="space-y-4">
              
              <Field className="space-y-1.5">
                <FieldLabel htmlFor="username" className="text-xs font-bold text-[#002d74] tracking-wide">
                  Usuario
                </FieldLabel>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ingrese su documento o usuario"
                    required
                    className="pl-10 bg-gray-50/50 border-gray-200 focus-visible:ring-[#002d74] h-11 text-sm rounded-lg placeholder:text-gray-400"
                  />
                </div>
              </Field>

              <Field className="space-y-1.5">
                <FieldLabel htmlFor="password" className="text-xs font-bold text-[#002d74] tracking-wide">
                  Contraseña
                </FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Ingrese su contraseña"
                    required 
                    className="pl-10 pr-10 bg-gray-50/50 border-gray-200 focus-visible:ring-[#002d74] h-11 text-sm rounded-lg placeholder:text-gray-400"
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </div>
              </Field>

              {/* Recordar mis datos */}
              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-[#002d74] focus:ring-[#002d74]"
                />
                <label htmlFor="remember" className="text-xs text-gray-500 font-medium cursor-pointer select-none">
                  Recordar mis datos
                </label>
              </div>

              {/* Botón Ingresar */}
              <Button 
                type="submit" 
                className="w-full bg-[#002874] hover:bg-[#001e54] text-white font-bold h-11 rounded-lg flex items-center justify-center gap-2 tracking-wider mt-4 shadow-md transition-all"
              >
                INGRESAR
                <ArrowRight className="w-4 h-4" />
              </Button>

            </FieldGroup>
          </form>

          {/* Separador y Soporte */}
          <div className="mt-8 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs font-medium text-gray-500">
              ¿Problemas para acceder?{" "}
              <a href="#" className="text-[#002874] font-bold hover:underline ml-1">
                Contacte a soporte
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}