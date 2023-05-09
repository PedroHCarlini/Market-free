document.querySelector("#salvar").addEventListener("click", cadastrar)
let modal = new bootstrap.Modal(document.getElementById("exampleModal"))

function cadastrar(){
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value
    let urgencia = document.querySelector("#urgencia").value

    const tarefa = {
        titulo,
        descricao,
        pontos,
        categoria,
        urgencia,
    }

    if(titulo == ''){
        return false
    }

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    modal.hide()

    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )

    

}

function spanCategoria(tarefa){
    if(tarefa.urgencia == 'Baixa'){
        return `<p><span class="badge text-bg-success"><b>${tarefa.urgencia}</b></span></p>`
    }

    if(tarefa.urgencia == 'Média'){
        return `<p><span class="badge text-bg-primary"><b>${tarefa.urgencia}</b></span></p>`
    }

    if(tarefa.urgencia == 'Alta'){
        return `<p><span class="badge text-bg-warning"><b>${tarefa.urgencia}</b></span></p>`
    }

    if(tarefa.urgencia == 'Extrema'){
        return `<p><span class="badge text-bg-danger"><b>${tarefa.urgencia}</b></span></p>`
    }
}

function gerarCard(tarefa){
        return `<div class="col-12 col-md-6 col-lg-3">
                 <div class="card">
                    <div class="card-header">
                        ${tarefa.titulo}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.descricao}</p>
                        <p>
                            <span class="badge text-bg-success">
                                ${tarefa.categoria}
                            </span>
                        </p>
                        <p>${tarefa.pontos}pts</p>

                        ${spanCategoria(tarefa)}
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a onClick="remover()" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->`
    }


    function remover(){
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            }
          })
    }