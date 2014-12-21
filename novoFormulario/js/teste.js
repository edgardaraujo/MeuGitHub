

var criticaCampos = (function(div, input, critica, tabNum){
    "use strict";

    var divCritica = $(div);
    var inputCritica = $(input);
	var tabNumCritica = $('#svpaWebTab li:eq('+tabNum+') a');
	
    if(critica){

        divCritica.addClass("has-error");
        inputCritica.focus();
		tabNumCritica.tab('show');
    }else{

        divCritica.removeClass("has-error");
    }
});

$("#svpaWebSubmit").click(function(){
    "use strict";
	
	//laudo
    var svpaWebStatus = $('#svpaWebStatus');

    if(svpaWebStatus.val() == ""){
	
		alert("Preencha status online");
        criticaCampos('#svpaWebStatusDiv', '#svpaWebStatus', true, 0);
		
        return false;
    }else{
        criticaCampos('#svpaWebStatusDiv', '#svpaWebStatus', false, 0);
    }
	
	var svpaWebRealizada = $("#svpaWebRealizada");
	
	if(svpaWebRealizada.val() == ""){
		
		alert("Preencha indicativo da vistoria");		
		criticaCampos('#svpaWebRealizadaDiv', '#svpaWebRealizada', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebRealizadaDiv', '#svpaWebRealizada', false, 0);
	}
	
	var svpaWebDataRealizacao = $("#svpaWebDataRealizacao");
	
	if(svpaWebDataRealizacao.val() == ""){
		
		alert("Preencha data de realização");		
		criticaCampos('#svpaWebDataRealizacaoDiv', '#svpaWebDataRealizacao', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebDataRealizacaoDiv', '#svpaWebDataRealizacao', false, 0);
	}
	
	var svpaWebHoraRealizacao = $("#svpaWebHoraRealizacao");
	
	if(svpaWebHoraRealizacao.val() == ""){
		
		alert("Preencha hora de realização");		
		criticaCampos('#svpaWebHoraRealizacaoDiv', '#svpaWebHoraRealizacao', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebHoraRealizacaoDiv', '#svpaWebHoraRealizacao', false, 0);
	}
	
	var svpaWebDataDigitacao = $("#svpaWebDataDigitacao");
	
	if(svpaWebDataDigitacao.val() == ""){
		
		alert("Preencha data da digitação");		
		criticaCampos('#svpaWebDataDigitacaoDiv', '#svpaWebDataDigitacao', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebDataDigitacaoDiv', '#svpaWebDataDigitacao', false, 0);
	}
	
	var svpaWebHoraDigitacao = $("#svpaWebHoraDigitacao");
	
	if(svpaWebHoraDigitacao.val() == ""){
		
		alert("Preencha hora da digitação");		
		criticaCampos('#svpaWebHoraDigitacaoDiv', '#svpaWebHoraDigitacao', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebHoraDigitacaoDiv', '#svpaWebHoraDigitacao', false, 0);
	}
	
	var svpaWebIdSeguradora = $("#svpaWebIdSeguradora");
	
	if(svpaWebIdSeguradora.val() == ""){
		
		alert("Preencha código da seguradora");
		criticaCampos('#svpaWebIdSeguradoraDiv', '#svpaWebIdSeguradora', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebIdSeguradoraDiv', '#svpaWebIdSeguradora', false, 0);
	}
	
	var svpaWebCorretor = $("#svpaWebCorretor");
	
	if(svpaWebCorretor.val() == ""){
		
		alert("Preencha nome corretor / corretora");
		criticaCampos('#svpaWebCorretorDiv', '#svpaWebCorretor', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebCorretorDiv', '#svpaWebCorretor', false, 0);
	}
	
	var svpaWebIdMotivo = $("#svpaWebIdMotivo");
	
	if(svpaWebIdMotivo.val() == ""){
		
		alert("Preencha código motivo da vistoria");
		criticaCampos('#svpaWebIdMotivoDiv', '#svpaWebIdMotivo', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebIdMotivoDiv', '#svpaWebIdMotivo', false, 0);
	}
	
	var svpaWebMotivo = $("#svpaWebMotivo");
	
	if(svpaWebMotivo.val() == ""){
		
		alert("Preencha descrição do motivo");
		criticaCampos('#svpaWebMotivoDiv', '#svpaWebMotivo', true, 0);
		return false
	}else{
		criticaCampos('#svpaWebMotivoDiv', '#svpaWebMotivo', false, 0);
	}
	
	if(svpaWebMotivo.val() == ""){
		
		alert("Preencha descrição do motivo");
		criticaCampos('#svpaWebMotivoDiv', '#svpaWebMotivo', true, 0);
		return false;
	}else{
		criticaCampos('#svpaWebMotivoDiv', '#svpaWebMotivo', false, 0);
	}
	
	//proponente
	var svpaWebTipoPessoa = $("#svpaWebTipoPessoa");
	
	if(svpaWebTipoPessoa.val() == ""){
		
		alert("Preencha tipo pessoa");
		criticaCampos('#svpaWebTipoPessoaDiv', '#svpaWebTipoPessoa', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebTipoPessoaDiv', '#svpaWebTipoPessoa', false, 1);
	}
	
	var svpaWebCpfCnpj = $("#svpaWebCpfCnpj");
	
	if(svpaWebCpfCnpj.val() == ""){
		
		alert("Preencha CPF/CNPJ");
		criticaCampos('#svpaWebCpfCnpjDiv', '#svpaWebCpfCnpj', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebCpfCnpjDiv', '#svpaWebCpfCnpj', false, 1);
	}
	
	var svpaWebProponente = $("#svpaWebProponente");
	
	if(svpaWebProponente.val() == ""){
		
		alert("Preencha nome proponente");
		criticaCampos('#svpaWebProponenteDiv', '#svpaWebProponente', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebProponenteDiv', '#svpaWebProponente', false, 1);
	}
	
	var svpaWebTipoEndereco = $("#svpaWebTipoEndereco");
	
	if(svpaWebTipoEndereco.val() == ""){
		
		alert("Preencha tipo de endereço");
		criticaCampos('#svpaWebTipoEnderecoDiv', '#svpaWebTipoEndereco', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebTipoEnderecoDiv', '#svpaWebTipoEndereco', false, 1);
	}
	
	var svpaWebCep = $("#svpaWebCep");
	
	if(svpaWebCep.val() == ""){
		
		alert("Preencha cep");
		criticaCampos('#svpaWebCepDiv', '#svpaWebCep', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebCepDiv', '#svpaWebCep', false, 1);
	}
	
	var svpaWebLograduro = $("#svpaWebLograduro");
	
	if(svpaWebLograduro.val() == ""){
		
		alert("Preencha logradouro");
		criticaCampos('#svpaWebLograduroDiv', '#svpaWebLograduro', true, 1);
		return false, 0;
	}else{
		criticaCampos('#svpaWebLograduroDiv', '#svpaWebLograduro', false, 1);
	}
	
	var svpaWebEndereco = $("#svpaWebEndereco");
	
	if(svpaWebEndereco.val() == ""){
		
		alert("Preencha endereço");
		criticaCampos('#svpaWebEnderecoDiv', '#svpaWebEndereco', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebEnderecoDiv', '#svpaWebEndereco', false, 1);
	}
	
	var svpaWebNumero = $("#svpaWebNumero");
	
	if(svpaWebNumero.val() == ""){
		
		alert("Preencha número endereço");
		criticaCampos('#svpaWebNumeroDiv', '#svpaWebNumero', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebNumeroDiv', '#svpaWebNumero', false, 1);
	}
	
	var svpaWebComplemento = $("#svpaWebComplemento");
	
	if(svpaWebComplemento.val() == ""){
		
		alert("Preencha complemento");
		criticaCampos('#svpaWebComplementoDiv', '#svpaWebComplemento', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebComplementoDiv', '#svpaWebComplemento', false, 1);
	}
	
	var svpaWebBairro = $("#svpaWebBairro");
	
	if(svpaWebBairro.val() == ""){
		
		alert("Preencha bairro");
		criticaCampos('#svpaWebBairroDiv', '#svpaWebBairro', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebBairroDiv', '#svpaWebBairro', false, 1);
	}
	
	var svpaWebCidade = $("#svpaWebCidade");
	
	if(svpaWebCidade.val() == ""){
		
		alert("Preencha cidade");
		criticaCampos('#svpaWebCidadeDiv', '#svpaWebCidade', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebCidadeDiv', '#svpaWebCidade', false, 1);
	}
	
	var svpaWebUf = $("#svpaWebUf");
	
	if(svpaWebUf.val() == ""){
		
		alert("Preencha UF");
		criticaCampos('#svpaWebUfDiv', '#svpaWebUf', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebUfDiv', '#svpaWebUf', false, 1);
	}
	
	var svpaWebTelFixo = $("#svpaWebTelFixo");
	
	if(svpaWebTelFixo.val() == ""){
		
		alert("Preencha telefone fixo");
		criticaCampos('#svpaWebTelFixoDiv', '#svpaWebTelFixo', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebTelFixoDiv', '#svpaWebTelFixo', false, 1);
	}
	
	var svpaWebCelular = $("#svpaWebCelular");
	
	if(svpaWebCelular.val() == ""){
		
		alert("Preencha celular");
		criticaCampos('#svpaWebCelularDiv', '#svpaWebCelular', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebCelularDiv', '#svpaWebCelular', false, 1);
	}
	
	var svpaWebEmail = $("#svpaWebEmail");
	
	if(svpaWebEmail.val() == ""){
		
		alert("Preencha e-mail");
		criticaCampos('#svpaWebEmailDiv', '#svpaWebEmail', true, 1);
		return false;
	}else{
		criticaCampos('#svpaWebEmailDiv', '#svpaWebEmail', false, 1);
	}
	
	//veiculo
	var svpaWebChassi = $("#svpaWebChassi");
	
	if(svpaWebChassi.val() == ""){
		
		alert("Preencha chassi");
		criticaCampos('#svpaWebChassiDiv', '#svpaWebChassi', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebChassiDiv', '#svpaWebChassi', false, 2);
	}
	
	var svpaWebTipoVeiculo = $("#svpaWebTipoVeiculo");
	
	if(svpaWebTipoVeiculo.val() == ""){
		
		alert("Preencha tipo de veículo");
		criticaCampos('#svpaWebTipoVeiculoDiv', '#svpaWebTipoVeiculo', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebTipoVeiculoDiv', '#svpaWebTipoVeiculo', false, 2);
	}
	
	var svpaWebOriginalCopiaDoc = $("#svpaWebOriginalCopiaDoc");
	
	if(svpaWebOriginalCopiaDoc.val() == ""){
		
		alert("Preencha original ou cópia do documento");
		criticaCampos('#svpaWebOriginalCopiaDocDiv', '#svpaWebOriginalCopiaDoc', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebOriginalCopiaDocDiv', '#svpaWebOriginalCopiaDoc', false, 2);
	}
	
	var svpaWebPropietario = $("#svpaWebPropietario");
	
	if(svpaWebPropietario.val() == ""){
		
		alert("Preencha nome do proprietário");
		criticaCampos('#svpaWebPropietarioDiv', '#svpaWebPropietario', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebPropietarioDiv', '#svpaWebPropietario', false, 2);
	}

	var svpaWebTipoPessoaProprietario = $("#svpaWebTipoPessoaProprietario");

	if(svpaWebTipoPessoaProprietario.val() == ""){

		alert("Preencha tipo pessoa proprietário");
		criticaCampos('#svpaWebTipoPessoaProprietarioDiv', '#svpaWebTipoPessoaProprietario', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebTipoPessoaProprietarioDiv', '#svpaWebTipoPessoaProprietario', false, 2);
	}
	
	var svpaWebCpfCnpjProppietario = $("#svpaWebCpfCnpjProppietario");
	
	if(svpaWebCpfCnpjProppietario.val() == ""){
		
		alert("Preencha CPF/CNPJ proprietário");
		criticaCampos('#svpaWebCpfCnpjProppietarioDiv', '#svpaWebCpfCnpjProppietario', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCpfCnpjProppietarioDiv', '#svpaWebCpfCnpjProppietario', false, 2);
	}
	
	var svpaWebRenavam = $("#svpaWebRenavam");
	
	if(svpaWebRenavam.val() == ""){
		
		alert("Preencha renavam");
		criticaCampos('#svpaWebRenavamDiv', '#svpaWebRenavam', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebRenavamDiv', '#svpaWebRenavam', false, 2);
	}
	
	var svpaWebTipoDocumento = $("#svpaWebTipoDocumento");
	
	if(svpaWebTipoDocumento.val() == ""){
		
		alert("Preencha documento apresentado" );
		criticaCampos('#svpaWebTipoDocumentoDiv', '#svpaWebTipoDocumento', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebTipoDocumentoDiv', '#svpaWebTipoDocumento', false, 2);
	}
	
	var svpaWebDutDocNf = $("#svpaWebDutDocNf");
	
	if(svpaWebDutDocNf.val() == ""){
		
		alert("Preencha documento dut nota fiscal");
		criticaCampos('#svpaWebDutDocNfDiv', '#svpaWebDutDocNf', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebDutDocNfDiv', '#svpaWebDutDocNf', false, 2);
	}

	var svpaWebAlienado = $("#svpaWebAlienado");
	
	if(svpaWebAlienado.val() == ""){
		
		alert("Preencha alienado");
		criticaCampos('#svpaWebAlienadoDiv', '#svpaWebAlienado', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebAlienadoDiv', '#svpaWebAlienado', false, 2);
	}
		
	var svpaWebRestricao = $("#svpaWebRestricao");
	
	if(svpaWebRestricao.val() == ""){
		
		alert("Preencha restrição");
		criticaCampos('#svpaWebRestricaoDiv', '#svpaWebRestricao', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebRestricaoDiv', '#svpaWebRestricao', false, 2);
	}

	var svpaWebSalvado = $("#svpaWebSalvado");

	if(svpaWebSalvado.val() == ""){

		alert("Preencha salvado");
		criticaCampos('#svpaWebSalvadoDiv', '#svpaWebSalvado', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebSalvadoDiv', '#svpaWebSalvado', false, 2);
	}

	var svpaWebCrlv = $("#svpaWebCrlv");
	
	if(svpaWebCrlv.val() == ""){
		
		alert("Preencha CRLV");
		criticaCampos('#svpaWebCrlvDiv', '#svpaWebCrlv', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCrlvDiv', '#svpaWebCrlv', false, 2);
	}
	
	var svpaWebCrlvMunicipio = $("#svpaWebCrlvMunicipio");
	
	if(svpaWebCrlvMunicipio.val() == ""){
		
		alert("Preencha CRLV município");
		criticaCampos('#svpaWebCrlvMunicipioDiv', '#svpaWebCrlvMunicipio', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCrlvMunicipioDiv', '#svpaWebCrlvMunicipio', false, 2);
	}

	var svpaWebCrlvUf = $("#svpaWebCrlvUf");

	if(svpaWebCrlvUf.val() == ""){

		alert("Preencha CRLV UF");
		criticaCampos('#svpaWebCrlvUfDiv', '#svpaWebCrlvUf', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCrlvUfDiv', '#svpaWebCrlvUf', false, 2);
	}

	var svpaWebMarcaVeiculo = $("#svpaWebMarcaVeiculo");
	
	if(svpaWebMarcaVeiculo.val() == ""){
		
		alert("Preencha marca veículo");
		criticaCampos('#svpaWebMarcaVeiculoDiv', '#svpaWebMarcaVeiculo', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebMarcaVeiculoDiv', '#svpaWebMarcaVeiculo', false, 2);
	}
	
	var svpaWebModeloVeiculo = $("#svpaWebModeloVeiculo");
	
	if(svpaWebModeloVeiculo.val() == ""){
		
		alert("Preencha modelo veículo");
		criticaCampos('#svpaWebModeloVeiculoDiv', '#svpaWebModeloVeiculo', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebModeloVeiculoDiv', '#svpaWebModeloVeiculo', false, 2);
	}
	
	var svpaWebAnoFabricacao = $("#svpaWebAnoFabricacao");
	
	if(svpaWebAnoFabricacao.val() == ""){
		
		alert("Preencha ano fabricação");
		criticaCampos('#svpaWebAnoFabricacaoDiv', '#svpaWebAnoFabricacao', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebAnoFabricacaoDiv', '#svpaWebAnoFabricacao', false, 2);
	}
	
	var svpaWebAnoModelo = $("#svpaWebAnoModelo");
	
	if(svpaWebAnoModelo.val() == ""){
		
		alert("Preencha ano modelo");
		criticaCampos('#svpaWebAnoModeloDiv', '#svpaWebAnoModelo', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebAnoModeloDiv', '#svpaWebAnoModelo', false, 2);
	}

	var svpaWebCapacidade = $("#svpaWebCapacidade");

	if(svpaWebCapacidade.val() == ""){

		alert("Preencha capacidade veículo");
		criticaCampos('#svpaWebCapacidadeDiv', '#svpaWebCapacidade', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCapacidadeDiv', '#svpaWebCapacidade', false, 2);
	}
	
	var svpaWebPotencia = $("#svpaWebPotencia");
	
	if(svpaWebPotencia.val() == ""){
		
		alert("Preencha potência");
		criticaCampos('#svpaWebPotenciaDiv', '#svpaWebPotencia', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebPotenciaDiv', '#svpaWebPotencia', false, 2);
	}
	
	var svpaWebCilindrada = $("#svpaWebCilindrada");
	
	if(svpaWebCilindrada.val() == ""){
		
		alert("Preencha cilindrada");
		criticaCampos('#svpaWebCilindradaDiv', '#svpaWebCilindrada', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCilindradaDiv', '#svpaWebCilindrada', false, 2);
	}
	
	var svpaWebCodCombustivel = $("#svpaWebCodCombustivel");
	
	if(svpaWebCodCombustivel.val() == ""){
		
		alert("Preencha código combustível");
		criticaCampos('#svpaWebCodCombustivelDiv', '#svpaWebCodCombustivel', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCodCombustivelDiv', '#svpaWebCodCombustivel', false, 2);
	}
	
	var svpaWebCor = $("#svpaWebCor");
	
	if(svpaWebCor.val() == ""){
		
		alert("Preencha cor");
		criticaCampos('#svpaWebCorDiv', '#svpaWebCor', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCorDiv', '#svpaWebCor', false, 2);
	}
	
	var svpaWebTipoPintura = $("#svpaWebTipoPintura");
	
	if(svpaWebTipoPintura.val() == ""){
		
		alert("Preencha tipo pintura");
		criticaCampos('#svpaWebTipoPinturaDiv', '#svpaWebTipoPintura', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebTipoPinturaDiv', '#svpaWebTipoPintura', false, 2);
	}
	
	var svpaWebPlaca = $("#svpaWebPlaca");
	
	if(svpaWebPlaca.val() == ""){
		
		alert("Preencha placa");
		criticaCampos('#svpaWebPlacaDiv', '#svpaWebPlaca', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebPlacaDiv', '#svpaWebPlaca', false, 2);
	}
	
	var svpaWebUfTargeja = $("#svpaWebUfTargeja");
	
	if(svpaWebUfTargeja.val() == ""){
		
		alert("Preencha UF");
		criticaCampos('#svpaWebUfTargejaDiv', '#svpaWebUfTargeja', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebUfTargejaDiv', '#svpaWebUfTargeja', false, 2);
	}
	
	var svpaWebMunicipioTargeja = $("#svpaWebMunicipioTargeja");
	
	if(svpaWebMunicipioTargeja.val() == ""){
		
		alert("Preencha município");
		criticaCampos('#svpaWebMunicipioTargejaDiv', '#svpaWebMunicipioTargeja', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebMunicipioTargejaDiv', '#svpaWebMunicipioTargeja', false, 2);
	}
	
	var svpaWebAnoTarjeta = $("#svpaWebAnoTarjeta");
	
	if(svpaWebAnoTarjeta.val() == ""){
		
		alert("Preencha ano placa");
		criticaCampos('#svpaWebAnoTarjetaDiv', '#svpaWebAnoTarjeta', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebAnoTarjetaDiv', '#svpaWebAnoTarjeta', false, 2);
	}
	
	var svpaWebLacreTarjeta = $("#svpaWebLacreTarjeta");
	
	if(svpaWebLacreTarjeta.val() == ""){
		
		alert("Preencha lacre placa");
		criticaCampos('#svpaWebLacreTarjetaDiv', '#svpaWebLacreTarjeta', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebLacreTarjetaDiv', '#svpaWebLacreTarjeta', false, 2);
	}
	
	var svpaWebCodCatPlaca = $("#svpaWebCodCatPlaca");
	
	if(svpaWebCodCatPlaca.val() == ""){
		
		alert("Preencha categoria placa");
		criticaCampos('#svpaWebCodCatPlacaDiv', '#svpaWebCodCatPlaca', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCodCatPlacaDiv', '#svpaWebCodCatPlaca', false, 2);
	}
	
	var svpaWebNumMotor = $("#svpaWebNumMotor");
	
	if(svpaWebNumMotor.val() == ""){
		
		alert("Preencha número motor");
		criticaCampos('#svpaWebNumMotorDiv', '#svpaWebNumMotor', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebNumMotorDiv', '#svpaWebNumMotor', false, 2);
	}
	
	var svpaWebVazamento = $("#svpaWebVazamento");
	
	if(svpaWebVazamento.val() == ""){
		
		alert("Preencha vazamento motor");
		criticaCampos('#svpaWebVazamentoDiv', '#svpaWebVazamento', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebVazamentoDiv', '#svpaWebVazamento', false, 2);
	}
	
	var svpaWebGravChassi = $("#svpaWebGravChassi");
	
	if(svpaWebGravChassi.val() == ""){
		
		alert("Preencha gravação chassi");
		criticaCampos('#svpaWebGravChassiDiv', '#svpaWebGravChassi', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebGravChassiDiv', '#svpaWebGravChassi', false, 2);
	}
	
	var svpaWebEtiqAssoalho = $("#svpaWebEtiqAssoalho");
	
	if(svpaWebEtiqAssoalho.val() == ""){
		
		alert("Preencha etiqueta assoalho");
		criticaCampos('#svpaWebEtiqAssoalhoDiv', '#svpaWebEtiqAssoalho', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebEtiqAssoalhoDiv', '#svpaWebEtiqAssoalho', false, 2);
	}
	
	var svpaWebEtiqColuna = $("#svpaWebEtiqColuna");
	
	if(svpaWebEtiqColuna.val() == ""){
		
		alert("Preencha etiqueta coluna");
		criticaCampos('#svpaWebEtiqColunaDiv', '#svpaWebEtiqColuna', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebEtiqColunaDiv', '#svpaWebEtiqColuna', false, 2);
	}
	
	var svpaWebEtiqCompMotor = $("#svpaWebEtiqCompMotor");
	
	if(svpaWebEtiqCompMotor.val() == ""){
		
		alert("Preencha etiqueta compartimento do motor");
		criticaCampos('#svpaWebEtiqCompMotorDiv', '#svpaWebEtiqCompMotor', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebEtiqCompMotorDiv', '#svpaWebEtiqCompMotor', false, 2);
	}
	
	var svpaWebPlaqueta = $("#svpaWebPlaqueta");
	
	if(svpaWebPlaqueta.val() == ""){
		
		alert("Preencha plaqueta");
		criticaCampos('#svpaWebPlaquetaDiv', '#svpaWebPlaqueta', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebPlaquetaDiv', '#svpaWebPlaqueta', false, 2);
	}
	
	var svpaWebPlaquetaCarroceria = $("#svpaWebPlaquetaCarroceria");
	
	if(svpaWebPlaquetaCarroceria.val() == ""){
		
		alert("Preencha plaqueta carroceria");
		criticaCampos('#svpaWebPlaquetaCarroceriaDiv', '#svpaWebPlaquetaCarroceria', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebPlaquetaCarroceriaDiv', '#svpaWebPlaquetaCarroceria', false, 2);
	}
	
	var svpaWebGravNumMotor = $("#svpaWebGravNumMotor");
	
	if(svpaWebGravNumMotor.val() == ""){
		
		alert("Preencha gravação número do motor");
		criticaCampos('#svpaWebGravNumMotorDiv', '#svpaWebGravNumMotor', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebGravNumMotorDiv', '#svpaWebGravNumMotor', false, 2);
	}
	
	var svpaWebGravVidros = $("#svpaWebGravVidros");
	
	if(svpaWebGravVidros.val() == ""){
		
		alert("Preencha gravação número do motor");
		criticaCampos('#svpaWebGravVidrosDiv', '#svpaWebGravVidros', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebGravVidrosDiv', '#svpaWebGravVidros', false, 2);
	}
	
	var svpaWebRebaixado = $("#svpaWebRebaixado");
	
	if(svpaWebRebaixado.val() == ""){
		
		alert("Preencha rebaixado");
		criticaCampos('#svpaWebRebaixadoDiv', '#svpaWebRebaixado', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebRebaixadoDiv', '#svpaWebRebaixado', false, 2);
	}
	
	var svpaWebVeiculoTransformado = $("#svpaWebVeiculoTransformado");
	
	if(svpaWebVeiculoTransformado.val() == ""){
		
		alert("Preencha veiculo transformado");
		criticaCampos('#svpaWebVeiculoTransformadoDiv', '#svpaWebVeiculoTransformado', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebVeiculoTransformadoDiv', '#svpaWebVeiculoTransformado', false, 2);
	}
	
	var svpaWebTerceiroEixo = $("#svpaWebTerceiroEixo");
	
	if(svpaWebTerceiroEixo.val() == ""){
		
		alert("Preencha terceiro eixo");
		criticaCampos('#svpaWebTerceiroEixoDiv', '#svpaWebTerceiroEixo', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebTerceiroEixoDiv', '#svpaWebTerceiroEixo', false, 2);
	}
	
	var svpaWebQtdEixoDianteiro = $("#svpaWebQtdEixoDianteiro");
	
	if(svpaWebQtdEixoDianteiro.val() == ""){
		
		alert("Preencha quantidade eixo dianteiro");
		criticaCampos('#svpaWebQtdEixoDianteiroDiv', '#svpaWebQtdEixoDianteiro', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebQtdEixoDianteiroDiv', '#svpaWebQtdEixoDianteiro', false, 2);
	}
	
	var svpaWebQtdEixoTraseiro = $("#svpaWebQtdEixoTraseiro");
	
	if(svpaWebQtdEixoTraseiro.val() == ""){
		
		alert("Preencha quantidade eixo traseiro");
		criticaCampos('#svpaWebQtdEixoTraseiroDiv', '#svpaWebQtdEixoTraseiro', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebQtdEixoTraseiroDiv', '#svpaWebQtdEixoTraseiro', false, 2);
	}
	
	var svpaWebCodTracao = $("#svpaWebCodTracao");
	
	if(svpaWebCodTracao.val() == ""){
		
		alert("Preencha tração");
		criticaCampos('#svpaWebCodTracaoDiv', '#svpaWebCodTracao', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCodTracaoDiv', '#svpaWebCodTracao', false, 2);
	}
	
	var svpaWebCodTipoCarroceria = $("#svpaWebCodTipoCarroceria");
	
	if(svpaWebCodTipoCarroceria.val() == ""){
		
		alert("Preencha tipo carroceria");
		criticaCampos('#svpaWebCodTipoCarroceriaDiv', '#svpaWebCodTipoCarroceria', true, 2);
		return false;
	}else{
		criticaCampos('#svpaWebCodTipoCarroceriaDiv', '#svpaWebCodTipoCarroceria', false, 2);
	}
	
	//vistoria
	var svpaWebCodVistoriador = $("#svpaWebCodVistoriador");
	
	if(svpaWebCodVistoriador.val() == ""){
		
		alert("Preencha código vistoriador");
		criticaCampos('#svpaWebCodVistoriadorDiv', '#svpaWebCodVistoriador', true, 3);
		return false;
	}else{
		criticaCampos('#svpaWebCodVistoriadorDiv', '#svpaWebCodVistoriador', false, 3);
	}
	
	var svpaWebHoraTermino = $("#svpaWebHoraTermino");
	
	if(svpaWebHoraTermino.val() == ""){
		
		alert("Preencha hora término");
		criticaCampos('#svpaWebHoraTerminoDiv', '#svpaWebHoraTermino', true, 3);
		return false;
	}else{
		criticaCampos('#svpaWebHoraTerminoDiv', '#svpaWebHoraTermino', false, 3);
	}
	
	var svpaWebCpfRespApresVeiculo = $("#svpaWebCpfRespApresVeiculo");
	
	if(svpaWebCpfRespApresVeiculo.val() == ""){
		
		alert("Preencha CPF responsável");
		criticaCampos('#svpaWebCpfRespApresVeiculoDiv', '#svpaWebCpfRespApresVeiculo', true, 3);
		return false;
	}else{
		criticaCampos('#svpaWebCpfRespApresVeiculoDiv', '#svpaWebCpfRespApresVeiculo', false, 3);
	}
	
	var svpaWebNomeRespApresVeiculo = $("#svpaWebNomeRespApresVeiculo");
	
	if(svpaWebNomeRespApresVeiculo.val() == ""){
		
		alert("Preencha nome responsável");
		criticaCampos('#svpaWebNomeRespApresVeiculoDiv', '#svpaWebNomeRespApresVeiculo', true, 3);
		return false;
	}else{
		criticaCampos('#svpaWebNomeRespApresVeiculoDiv', '#svpaWebNomeRespApresVeiculo', false, 3);
	}
	
    return false;
});