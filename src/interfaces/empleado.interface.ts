import { RolI } from "./rol.interface";

export interface EmpleadoI {
    nombre : String;
    numero_empleado : String;
    telefono : String;
    password : String;
    rol : RolI;
    color : String;
    cedula : String;
    fecha_ingreso : Date;
    fecha_baja : Date;
    disponible : Boolean;
    pago_completo : Boolean;
    porcentaje : String;
    porcentaje_estetica : String;
}