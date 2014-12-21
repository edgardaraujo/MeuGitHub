/*
 var critica_incluir_localizar = (function(tl, div, aviso, input, info){
 "use strict";

 var tl_incluir = $(tl);
 var div_incluir = $(div);
 var aviso_incluir = $(aviso);
 var nome_emp = $(input);

 if(!info){
 tl_incluir.removeClass('panel-info');
 tl_incluir.addClass('panel-danger');
 div_incluir.addClass("has-error");
 aviso_incluir.addClass('alert-danger');
 nome_emp.focus();
 }else{
 tl_incluir.addClass('panel-info');
 tl_incluir.removeClass('panel-danger');
 div_incluir.removeClass("has-error");
 aviso_incluir.removeClass('alert-danger');
 }
 });

 (function(){
 "use strict";
 $.getJSON("control/linha.php?opcao=consultar&ativo=1", function() {
 })
 .done(function(lista_linhas) {

 var status = lista_linhas.mensagem.status;
 var descricao = lista_linhas.mensagem.descricao;
 var tam = Object.keys(lista_linhas.listaLinha).length;

 if(status == 1){
 for (var i = 0; i < tam; i++) {
 var lin_idlinha = lista_linhas.listaLinha[i].lin_idlinha;
 var lin_nome = lista_linhas.listaLinha[i].lin_nome;

 $('#linhas_associar_fal').append('<option value=' + lin_idlinha + '>' + lin_nome + '</option>');
 }
 }else if(status == 2 || status == 3){
 $('#linhas_associar_fal').append('<option value="">' + descricao + '</option>');
 }else{
 $('#linhas_associar_fal').append('<option value="">Erro desconhecido</option>');
 }
 })
 .fail(function() {
 $('#linhas_associar_fal').append('<option value="">Falha ao executar</option>');
 });
 })();*/

(function(){
    "use strict";

        var svpaWebSubmit = $("#svpaWebSubmit");

        svpaWebSubmit.click(function(){

            var svpaWebStatus = $("#svpaWebStatus");
			var svpaWebStatusDiv = $("#svpaWebStatusDiv");
			
            if(svpaWebStatus.val() == ""){
                alert("Preencha status online");
				svpaWebStatusDiv.addClass("has-error");
				svpaWebStatus.focus();
				return false;
            }else{
				svpaWebStatusDiv.removeClass("has-error");
            }
			
			var svpaWebRealizada = $("#svpaWebRealizada");
			var svpaWebRealizadaDiv = $("#svpaWebRealizadaDiv");
			
            if(svpaWebRealizada.val() == ""){
                alert("Preencha indicativo da vistoria");
				svpaWebRealizadaDiv.addClass("has-error");
				svpaWebRealizada.focus();
				return false;
            }else{
				svpaWebRealizadaDiv.removeClass("has-error");
            }
			
			var svpaWebDataRealizacao = $("#svpaWebDataRealizacao");
			var svpaWebDataRealizacaoDiv = $("#svpaWebDataRealizacaoDiv");
			
            if(svpaWebDataRealizacao.val() == ""){
                alert("Preencha data de realização");
				svpaWebDataRealizacaoDiv.addClass("has-error");
				svpaWebDataRealizacao.focus();
				return false;
            }else{
				svpaWebDataRealizacaoDiv.removeClass("has-error");
            }
			
			var svpaWebHoraRealizacao = $("#svpaWebHoraRealizacao");
			var svpaWebHoraRealizacaoDiv = $("#svpaWebHoraRealizacaoDiv");
			
            if(svpaWebHoraRealizacao.val() == ""){
                alert("Preencha hora de realização");
				svpaWebHoraRealizacaoDiv.addClass("has-error");
				svpaWebHoraRealizacao.focus();
				return false;
            }else{
				svpaWebHoraRealizacaoDiv.removeClass("has-error");
            }
			/*
			var svpaWebNumSolicitacao = $("#svpaWebNumSolicitacao");
			var svpaWebNumSolicitacaoDiv = $("#svpaWebNumSolicitacaoDiv");
			
            if(svpaWebNumSolicitacao.val() == ""){
                alert("Preencha número da solicitação");
				svpaWebNumSolicitacaoDiv.addClass("has-error");
				svpaWebNumSolicitacao.focus();
				return false;
            }else{
				svpaWebNumSolicitacaoDiv.removeClass("has-error");
            }
			*/
			var svpaWebIdSeguradora = $("#svpaWebIdSeguradora");
			var svpaWebIdSeguradoraDiv = $("#svpaWebIdSeguradoraDiv");
			
            if(svpaWebIdSeguradora.val() == ""){
                alert("Preencha código da seguradora");
				svpaWebIdSeguradoraDiv.addClass("has-error");
				svpaWebIdSeguradora.focus();
				return false;
            }else{
				svpaWebIdSeguradoraDiv.removeClass("has-error");
            }
			/*
			var svpaWebSucursal = $("#svpaWebSucursal");
			var svpaWebSucursalDiv = $("#svpaWebSucursalDiv");
			
            if(svpaWebSucursal.val() == ""){
                alert("Preencha sucursal da seguradora");
				svpaWebSucursalDiv.addClass("has-error");
				svpaWebSucursal.focus();
				return false;
            }else{
				svpaWebSucursalDiv.removeClass("has-error");
            }
			*/
			/*
			var svpaWebSusep = $("#svpaWebSusep");
			var svpaWebSusepDiv = $("#svpaWebSusepDiv");
			
            if(svpaWebSusep.val() == ""){
                alert("Preencha código SUSEP do corretor");
				svpaWebSusepDiv.addClass("has-error");
				svpaWebSusep.focus();
				return false;
            }else{
				svpaWebSusepDiv.removeClass("has-error");
            }
			*/
			var svpaWebCorretor = $("#svpaWebCorretor");
			var svpaWebCorretorDiv = $("#svpaWebCorretorDiv");
			
            if(svpaWebCorretor.val() == ""){
                alert("Preencha nome corretor / corretora");
				svpaWebCorretorDiv.addClass("has-error");
				svpaWebCorretor.focus();
				return false;
            }else{
				svpaWebCorretorDiv.removeClass("has-error");
            }
			/*
			var svpaWebCodCorretor = $("#svpaWebCodCorretor");
			var svpaWebCodCorretorDiv = $("#svpaWebCodCorretorDiv");
			
            if(svpaWebCodCorretor.val() == ""){
                alert("Preencha código do corretor na CIA");
				svpaWebCodCorretorDiv.addClass("has-error");
				svpaWebCodCorretor.focus();
				return false;
            }else{
				svpaWebCodCorretorDiv.removeClass("has-error");
            }
			*/
			var svpaWebIdMotivo = $("#svpaWebIdMotivo");
			var svpaWebIdMotivoDiv = $("#svpaWebIdMotivoDiv");
			
            if(svpaWebIdMotivo.val() == ""){
                alert("Preencha código motivo da vistoria");
				svpaWebIdMotivoDiv.addClass("has-error");
				svpaWebIdMotivo.focus();
				return false;
            }else{
				svpaWebIdMotivoDiv.removeClass("has-error");
            }
			
			var svpaWebMotivo = $("#svpaWebMotivo");
			var svpaWebMotivoDiv = $("#svpaWebMotivoDiv");
			
            if(svpaWebMotivo.val() == ""){
                alert("Preencha descrição do motivo");
				svpaWebMotivoDiv.addClass("has-error");
				svpaWebMotivo.focus();
				return false;
            }else{
				svpaWebMotivoDiv.removeClass("has-error");
            }
			/*
			var svpaWebApolice = $("#svpaWebApolice");
			var svpaWebApoliceDiv = $("#svpaWebApoliceDiv");
			
            if(svpaWebApolice.val() == ""){
                alert("Preencha número da apólice de seguro");
				svpaWebApoliceDiv.addClass("has-error");
				svpaWebApolice.focus();
				return false;
            }else{
				svpaWebApoliceDiv.removeClass("has-error");
            }
			*/
			/*
			var svpaWebCodAgendamento = $("#svpaWebCodAgendamento");
			var svpaWebCodAgendamentoDiv = $("#svpaWebCodAgendamentoDiv");
			
            if(svpaWebCodAgendamento.val() == ""){
                alert("Preencha código do agendamento");
				svpaWebCodAgendamentoDiv.addClass("has-error");
				svpaWebCodAgendamento.focus();
				return false;
            }else{
				svpaWebCodAgendamentoDiv.removeClass("has-error");
            }
			*/
			/*
			var svpaWebSenha = $("#svpaWebSenha");
			var svpaWebSenhaDiv = $("#svpaWebSenhaDiv");
			
            if(svpaWebSenha.val() == ""){
                alert("Preencha senha para vistoria");
				svpaWebSenhaDiv.addClass("has-error");
				svpaWebSenha.focus();
				return false;
            }else{
				svpaWebSenhaDiv.removeClass("has-error");
            }
			*/
			
			

        });

    

})();

var classValidacao = (function(div, validacao){

        "use strict";

        var divValidacao = $("div");;
        var validacaoValor = validacao;

        if(validacaoValor == 0){

            alert('if');
            divValidacao.addClass("has-error");
            return false;

        }else{
            alert('else');
            divValidacao.removeClass("has-error");

        }

    });


