import cofremTrabajador from '@documents/ccf-cofrem/form-afiliacion-trabajador-cofrem.pdf';
import cofremDeclaracion from '@documents/ccf-cofrem/formato-declaracion-juramentada-cofrem.pdf';
import cofremEmpresa from '@documents/ccf-cofrem/formulario-afiliacion-empresa-cofrem.pdf';

import cafamazTrabajador from '@documents/ccf-cafamaz/form-trabajador-cafamaz.pdf'
import cafamazDeclaracion from '@documents/ccf-cafamaz/form-declaracion-cafamaz.pdf'
import cafamazEmpresa from '@documents/ccf-cafamaz/form-empresa-cafamaz.pdf'

import comfaOrienteTrabajador from '@documents/ccf-comfaoriente/form-trabajador-comfaoriente.pdf'
import comfaOrienteDeclaracion from '@documents/ccf-comfaoriente/form-declaracion-comfaoriente.pdf'
import comfaOrienteEmpresa from '@documents/ccf-comfaoriente/form-empresa-comfaoriente.pdf'

import cafabaTrabajador from '@documents/ccf-cafaba/form-trabajador-cafaba.pdf'
import cafabaDeclaracion from '@documents/ccf-cafaba/form-declaracion-cafaba.pdf'
import cafabaEmpresa from '@documents/ccf-cafaba/form-empresa-cafaba.pdf'

export const pdfFiles = [
    {
        ruta: 'cofremform',
        name: 'Cofrem',
        pdf: [
            {
                title: 'Formulario Afiliación Trabajador',
                archivo: cofremTrabajador
            },
            {
                title: 'Formulario Declaración Juramentada',
                archivo: cofremDeclaracion
            },
            {
                title: 'Formulario Afiliación Empresa',
                archivo: cofremEmpresa
            },
        ]
    },
    {
        ruta: 'cafamazform',
        name: 'Cafamaz',
        pdf: [
            {
                title: 'Formulario Afiliación Trabajador',
                archivo: cafamazTrabajador
            },
            {
                title: 'Formulario Declaración Juramentada',
                archivo: cafamazDeclaracion
            },
            {
                title: 'Formulario Afiliación Empresa',
                archivo: cafamazEmpresa
            },
        ]
    },
    {
        ruta: 'cafabaform',
        name: 'Cafaba',
        pdf: [
            {
                title: 'Formulario Afiliación Trabajador',
                archivo: cafabaTrabajador
            },
            {
                title: 'Formulario Declaración Juramentada',
                archivo: cafabaDeclaracion
            },
            {
                title: 'Formulario Afiliación Empresa',
                archivo: cafabaEmpresa
            },
        ]
    },
    {
        ruta: 'comfaorienteform',
        name: 'Comfa Oriente',
        pdf: [
            {
                title: 'Formulario Afiliación Trabajador',
                archivo: comfaOrienteTrabajador
            },
            {
                title: 'Formulario Declaración Juramentada',
                archivo: comfaOrienteDeclaracion
            },
            {
                title: 'Formulario Afiliación Empresa',
                archivo: comfaOrienteEmpresa
            },
        ]
    },
]