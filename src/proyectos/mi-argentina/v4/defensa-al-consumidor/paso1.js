let count = 1;
	let alerts = []
	let newFormEntry = `<div id="step1-0${count}">
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
                />
                Por nombre de empresa o negocio
              </label>
            </div>
            <select
              id="nombreEntidad${count}"
              placeholder="Seleccionar"
              class="form-control m-t-1 m-b-2 hidden"
              onchange="
                showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))"
            >
              <option value="">Elegir una opción</option>
              <option value="Movistar">Movistar</option>
              <option value="Personal">Personal</option>
              <option value="Claro">Claro</option>
              <option value="Tuenti">Tuenti</option>
            </select>
            <div class="radio">
              <label for="cuit${count}">
                <input
                  type="radio"
                  autocomplete="off"
                  name="datosProveedor"
                  id="cuit${count}"
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
      </fieldset>
    </fieldset></div>`
  
	let containerone = document.createElement('div')
	window.onload = function() {
		containerone.innerHTML = newFormEntry
		document.querySelector('#step-1').appendChild(containerone);
		showElements(`[name="datosProveedor"]`, `entidad${count}`, `#nombreEntidad${count}`);
		showElements(`[name="datosProveedor"]`, `cuit${count}`, `#numeroCuit${count}`);
	};
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
	function hideElement(element) {
		element.classList.add("hidden");
	}
	function showHideElements(element, element2) {
		element.classList.remove("hidden");
		element2.classList.add("hidden");
	}

	function addNewEnty() {
		count++;
		console.log(count)
		let newFormEntry2 = `<div id="step1-0${count}">
		<fieldset>
		<legend>
		<p><strong>Datos del proveedor del producto o servicio</strong></p>
		</legend>
		
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
					/>
					Por nombre de empresa o negocio
				</label>
				</div>
				<select
				id="nombreEntidad${count}"
				placeholder="Seleccionar"
				class="form-control m-t-1 m-b-2 hidden"
				onchange="
					showHideElements(document.querySelector('#infoEntidad'),document.querySelector('#step1-0${count}'))"
				>
				<option value="">Elegir una opción</option>
				<option value="Movistar">Movistar</option>
				<option value="Personal">Personal</option>
				<option value="Claro">Claro</option>
				<option value="Tuenti">Tuenti</option>
				</select>
				<div class="radio">
				<label for="cuit${count}">
					<input
					type="radio"
					autocomplete="off"
					name="datosProveedor"
					id="cuit${count}"
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
		</fieldset>
		</fieldset></div>`
	
		let container = document.createElement('div');
		container.setAttribute('id', `container${count}`)
		container.innerHTML = newFormEntry2

		document.querySelector('#addNewEnty').appendChild(container)
		
		
		
		showElements(`[name="datosProveedor"]`, `entidad${count}`, `#nombreEntidad${count}`);
		showElements(`[name="datosProveedor"]`, `cuit${count}`, `#numeroCuit${count}`);

		
	}

	function confirmEnty() {
		showHideElements(document.querySelector('#step1-1'), document.querySelector('#infoEntidad'))
		let alert = `<p class="help-block">Proveedor ${count}</p>
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
				<button class="btn btn-link btn-block-xs changeEnty"  type="button">
					Modificar proveedor
				</button>`
		let alertContainer =  document.createElement('div');
		alertContainer.setAttribute('id', `alert${count}`)
		alertContainer.innerHTML = alert
		document.querySelector('#alertEnty').appendChild(alertContainer)
	
		alerts.push(alertContainer)
		changeEnty()
		
		if(count >= 3){
			document.querySelector('#addNewEnty').classList.add('hidden')
		}
		
	}
	function changeEnty(){
		document.querySelectorAll('.changeEnty').forEach(b => {
			b.addEventListener("click", function(event){
				event.preventDefault();
				showHideElements(document.querySelector(`#step1-01`), document.querySelector('#step1-1'))
				this.parentElement.remove()
			})

			
		})

		
	}
	
	
	
	
	showElements('[name="conciliarSiNo"]', "conciliarNo", "#addNewEnty");
	showElement('[name="conciliarSiNo"]', 'click', "#toStep2")
	hideElements('[name="conciliarSiNo"]', "conciliarNo", "#conciliar");