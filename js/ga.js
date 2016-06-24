document.createElement("header" );
document.createElement("footer" );
document.createElement("section"); 
document.createElement("aside"  );
document.createElement("nav"    );
document.createElement("article"); 
document.createElement("hgroup" ); 
document.createElement("time"   );
/*ocultar iconos*/
	$(document).ready(function(){	
		$("body").on('click','.cerrar',function(){
			$(".hidden").hide('drop', {direction: 'down'}, 'slow');
			var mostar =$(this).attr('tag');
			$(".hidden").each(function(){
				if($(this).attr('id')==mostar){$(this).show('drop', {direction: 'up'}, 'slow');return false;}
			});
			return false;
		});
		/* Tabs*/
		$("body").on('click','.t',function(){
			$(".t").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			$(".tab").hide();
			var mostar =$(this).attr('tag');
			$(".tab").each(function(){
				if($(this).attr('id')==mostar){$(this).show();return false;}
			});
			return false;
		});
		/*funcion general cambio contenido*/
		$("body").on('click','.click',function(){
			$(".oculta").hide('drop');
			$(".click").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			var mostar =$(this).attr('tag');
			$(".oculta").each(function(){
				if($(this).attr('id')==mostar){$(this).slideDown();return false;}
			});
			return false;
		});
		/*$.ajax({ url: "home.html", success: function (info) { $(".CargaContenido").empty().html(info); }, cache: false });*/		
		$("body").on('click', '.mh,.menus, .botonHome', function () {			
			$(".mh").removeClass('seleccionado');
			$(this).addClass("seleccionado");
			var url = $(this).attr('tag');		
			$.ajax({ 
				url: url + '.html', cache: false, async: false, 
					beforeSend: function () 
					{$(".CargaContenido").empty().hide();}, 
					success: function (info)
					{$(".CargaContenido").html(info).show('drop', {direction: 'up'}, 800);} 
			});
		});
		var availableTags = [
			"Actas de entrega","Actualizacion de datos davox","Adicion y retiro de Voz Corporativa VC","Agrupacion de cuentas","Ajustes","Alta por normalizacion de servicios","Legalizacion","Cobro retroactivo","ATIS","Bajas","Cancelacion","Anulacion","cronograma","bloqueos","Cambio de numero","Cambio de plan","Cartera acuerdos de pago","Certificaciones","paz y salvos","Intereses por mora","Cesion de Contrato","cambio de titular","Cierre CUN ATIS GESPLUS","seriales PDTI","Puestos de Trabajo Informatico","Davox","Documentos","Descarga de trafico","Descarga de trafico para comerciales","LDN LDI"," voz corporativa VC","Linea telefonica","E1","RDSI","Gestel","Escalamiento mesa insatisfaccion","Enrutamiento lineas 018000","Factura","Prueba de entrega","Digital","Fisica","Collect","Direccion","Cronograma","Duplicado","Empaquetamiento","Bloqueo","Fraude","FX3","Larga distancia LD","Glosario","Guiones de llamada","Script Etiqueta","Inmunidades","Suspension pago","Licencia Windows","Sistema Operativo","PDTI","Mi Movistar","Multilinea ","Pago no aplicado o mal aplicado","Configuracion PBX Desconfiguracion","Scriba","Respuesta correo","PQR","Reclamos","Administrativos","Facturacion","Devolucion cheques dinero","Obra civil","Ajuste","Mora","Alto consumo","Cancelacion no efectiva","Doble cobro","Duracion de llamada","Llamada  no realizada","Impuesto","Indisponibilidad","Reconexion por deuda","Pago","Prioritaria","Gescode","Reinstalacion","Salesforce","Tipificar","Llamada se corta no seria","SF","Codigo secreto","Llamada en espera","Buzon de mensajes","Contestador automatico","Identificador de llamadas","Conferencia en tres","Transferencia","Conexion sin marcar","Marcacion abreviada","Servicios","Seguridad gestionada","Ciberseguridad","Metashield","Fasst","Latch","Web Security Gateway","SMDM ","ANTI-DDOS","Solicitud de Contrato","Sin Aprovisionamiento Alta  Baja Traslado","Suspension y Reconexion APC","Tiempos Promesa","Viabilidad","Transferencia propiedad de equipo PDTI","Transferencias Soporte Tecnico","Transferencia electronica","Pago","Cuenta bancaria","Troncal SIP","Validacion de datos","Consultas Generales","Adquira","Canales de atencion","Ciclos de facturacion","Saldos","Tarjetas unicas de pago","Aplicaciones Verticales","Flexy","Transferencia de llamadas","Marca Blanca","IP","#600 horario no habil desborde","Atencion Comerciales en #600","Bajas clausula cronograma Cancelacion Anulacion","ISC Indice Satisfaccion Cliente", "Representacion Legal", "camara de comercio", "Entidades Estatales, Financieras o Sin Animo de Lucro", "Sociedades en Liquidacion", "Consorcio y union temporal", "SGI"];
			$( "#autocomplete" ).autocomplete({
				source: availableTags
		});
	});		
	//El siguiente script es para los botones de navegación del slider
	function switchAutoAdvance() {
		imageSlider.switchAuto();
		switchPlayPauseClass();
	}
	function switchPlayPauseClass() {
		var auto = document.getElementById('auto');
		var isAutoPlay = imageSlider.getAuto();
		auto.className = isAutoPlay ? "group2-Pause" : "group2-Play";
		auto.title = isAutoPlay ? "Pause" : "Play";
	}
	switchPlayPauseClass();