let count = 1;
	let alerts = []
	let newFormEntry = `<div id="step1-0${count}" class="col-xs-12 col-md-8">
							<fieldset>
								<legend>
									Buscá al proveedor para agregar sus datos.
								<span class="help-block">
									Esta información la podés sacar de tu factura o
									ticket.
								</span>
							</legend>
							<fieldset data-id="datosProveedor${count}">
								<legend class="sr-only">
									¿Cómo querés buscar al proveedor (empresa o negocio)? *
								</legend>
        						<div class="form-group" data-required="true">
								<label for="" class="control-label">
									¿Cómo querés buscar al proveedor (empresa o
									negocio)? *
								</label>
          						<div class="radio-group" data-schema-key="datosProveedor">
									<div class="radio">
										<label for="entidad${count}">
											<input type="radio" autocomplete="off" name="datosProveedor" id="entidad${count}" data-show="nombreEntidad${count}"/>
												Por nombre de empresa o negocio
										</label>
									</div>
									<div class="form-group group-container hidden" id="nombreEntidad${count}">
										<label for="empresa"></label>
										<div class="row">
											<div class="col-xs-12">
												<div class="autocomplete">
													<input id="empresa" type="text" name="proveedor" class="form-control">
												<button class="btn btn-primary m-t-2" type="button" data-search="proveedor"
												onclick="showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))">Buscar empresa</button></div>
											</div>
										</div>
									</div>
									<div class="radio">
										<label for="cuit${count}">
											<input type="radio" autocomplete="off" name="datosProveedor" id="cuit${count}" data-show="numeroCuit${count}"/>
												Por número de CUIT
										</label>
									</div>
									<div id="numeroCuit${count}" class="hidden">
										<input type="text" class="form-control m-t-1 m-b-2"/>
										<button type="button" class="btn btn-success btn-block-xs next-step searchProv" onclick=" showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))
										" >
											Buscar proveedor por CUIT
										</button>
									</div>
								</div>
							</div>
						</fieldset>
					</fieldset>
				</div>`
  
	let containerone = document.createElement('div')
	window.onload = function() {
		containerone.innerHTML = newFormEntry
		document.querySelector('#step-1').appendChild(containerone);
		searchEnty(`[name="datosProveedor"]`, `nombreEntidad${count}`);
		searchEnty(`[name="datosProveedor"]`,`numeroCuit${count}`);
		
	};
	function searchEnty(radioNames, elementReveal) {
		document.querySelectorAll(radioNames).forEach(e => {
			e.addEventListener("click", function(){
				if(e.dataset.show == document.getElementById(elementReveal).id){
					document.getElementById(elementReveal).classList.remove('hidden')
				}else{
					document.getElementById(elementReveal).classList.add('hidden')
				}
				if(document.getElementById(elementReveal).id == `nombreEntidad${count}`){
					var emInput = document.getElementById(elementReveal).querySelector('input[type="text"]')
					emInput.value = ''
					console.log(emInput)
					autocomplete(emInput, proveedores,	emInput.id)
				}	
			})
		})
	}

	function showElements(radioNames, value, elementReveal) {
		document.querySelectorAll(radioNames).forEach((r) => {
			
			r.addEventListener("click", function(event) {
				if (event.target.id == value) {
					document.querySelector(elementReveal).classList.remove("hidden");
				} else {
					document.querySelector(elementReveal).classList.add("hidden");
				}
			});
		});
	}

	
	function hideElements(radioNames, value, elementReveal) {
		document.querySelectorAll(radioNames).forEach((r) => {
			r.addEventListener("click", function(event) {
				if (event.target.id == value) {
					document.querySelector(elementReveal).classList.add("hidden");
				}
			});
		});
	}
	function showElement(elementEvent, e, element) {
		document.querySelectorAll(elementEvent).forEach(r => {
			r.addEventListener(e, function() {
				document.querySelector(element).classList.remove("hidden");
			});
		});
		
	}

	function showHideElements(element, element2) {
		element.classList.remove("hidden");
		element2.classList.add("hidden");
	}

	function addNewEnty() {
		
		
		let newFormEntry2 = `<div id="step1-0${count}" class="col-xs-12 col-md-8">
		
		<p>
			<strong>
			Buscá al proveedor para agregar sus datos
			</strong>
			.
		</p>
		<p class="help-block">
			Esta información la podés sacar de tu factura o
			ticket.
		</p>
		<fieldset data-id="datosProveedor${count}">
			<legend class="sr-only">
			¿Cómo querés buscar al proveedor (empresa o
			negocio)? *
			</legend>
			<div class="form-group" data-required="true">
			<label for="" class="control-label">
				¿Cómo querés buscar al proveedor (empresa o
				negocio)? *
			</label>
			<div
				class="radio-group"
				data-schema-key="datosProveedor"
			>
				<div class="radio">
				<label for="entidad${count}">
					<input
					type="radio"
					autocomplete="off"
					name="datosProveedor"
					id="entidad${count}"
					data-show="nombreEntidad${count}"/>
					Por nombre de empresa o negocio
				</label>
				</div>
				<div class="form-group group-container hidden" id="nombreEntidad${count}" >
					<label for="empresa${count}">Buscar por nombre o empresa</label>
					<div class="row">
						<div class="col-xs-12">
							<div class="autocomplete">
								<input id="empresa" type="text" name="proveedor" class="form-control">
							<button class="btn btn-primary m-t-2" type="button" data-search="proveedor"
							onclick="showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))">Buscar empresa</button></div>
						</div>
					</div>
				</div>
				<div class="radio">
				<label for="cuit${count}">
					<input
					type="radio"
					autocomplete="off"
					name="datosProveedor"
					id="cuit${count}"
					data-show="numeroCuit${count}"
					/>
					Por número de CUIT
				</label>
				</div>
				<div id="numeroCuit${count}" class="hidden">
				<input
					type="text"
					class="form-control m-t-1 m-b-2"
				/>
				<button
					type="button"
					class="btn btn-success btn-block-xs next-step searchProv"
					onclick="
					showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))
					"
				>
					Buscar proveedor por CUIT
				</button>
				</div>
			</div>
			</div>
		</fieldset></div>`
	
		let container = document.createElement('div');
		container.setAttribute('id', `container${count}`)
		container.innerHTML = newFormEntry2
		document.querySelector('#addNewEnty').appendChild(container)
		searchEnty(`[name="datosProveedor"]`, `nombreEntidad${count}`);
		searchEnty(`[name="datosProveedor"]`,`numeroCuit${count}`);
		
		
		
		

		
	}

	function confirmEnty() {
		showHideElements(document.querySelector('#step1-1'), document.querySelector('#infoEntidad'))
		let alert = `<p class="help-block">Proveedor ${count}</p>
						<div class="row">
							<div class="col-lg-10">
								<div class="alert alert-success">
									<small>
										Nombre del proveedor (empresa o negocio) *
									</small>
									<p>
										<strong>
											Movistar - TELEFÓNICA MÓVILES ARGENTINA S.A
										</strong>
									</p>
								</div>
							</div>
						</div>
						
						<button class="btn btn-link btn-block-xs changeEnty"  type="button">
							Modificar proveedor
						</button>`
		let alertContainer =  document.createElement('div');
		alertContainer.setAttribute('id', `alert${count}`)
		alertContainer.innerHTML = alert
		document.querySelector('#alertEnty').appendChild(alertContainer)
		
		alerts.push(alertContainer)
		count++;
		changeEnty(document.querySelector(`#step1-01`), document.querySelector('#step1-1'))
		if(!document.querySelector('#step1-1').classList.contains('hidden')){
			showHideElements(document.querySelector('#deleteEnty'), document.querySelector('#modifyEnty'))
		}
		document.querySelector('#toStep2').classList.remove('hidden')
		if(count >= 3){
			document.querySelector('#addNewEnty').classList.add('hidden')
		}
	}
	function changeEnty(elementShow, elementHide){
		document.querySelectorAll('.changeEnty').forEach(b => {
			b.addEventListener("click", function(event){
				event.preventDefault();
				showHideElements(elementShow, elementHide)
				this.parentElement.remove()
				document.querySelector('#toStep2').classList.add('hidden')
			})
		})
	}
	
	
	
	
	showElements('[name="conciliarSiNo"]', "conciliarNo", "#addNewEnty");
	showElement('[name="conciliarSiNo"]', 'click', "#toStep2")
	showElement('#otro', 'click', "#reclamo")

	document.querySelector('#otro').addEventListener('click', function(){
		document.querySelector('#reclamoContainer').classList.remove('hidden')
	})

	document.querySelector('#deleteEnty').addEventListener('click', function(){
		document.querySelector('#infoEntidad').classList.add('hidden')
		if(alerts.length > 1){
			console.log(alerts.length)
			count = count -1
		}
	})

	document.querySelector('#addEntyBtn').addEventListener('click', function(){
		addNewEnty()
	})
	
	hideElements('[name="conciliarSiNo"]', "conciliarNo", "#conciliar");
	function selectCaba(selectPrimary, selectChanged1, selectChanged2){
		document.querySelector(selectPrimary).addEventListener('change', function(){
			if(this.value == 'CABA'){
				document.querySelector(selectChanged1).value = 'CABA'
				document.querySelector(selectChanged2). value = 'CABA'
			}
		})
	}
	
	selectCaba('#provincia', '#PartidoDpto', '#localidad')
	selectCaba('#provDelivery', '#partidoDptoDelivery', '#localidadDelivery')

