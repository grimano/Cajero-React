import React from 'react';

class NotFoundPage
 extends React.Component{

    render()
    {
        return(
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">404</span>
                            <div class="mb-4 lead">La página que esta buscando no fue encontrada</div>
                            <a href="/" class="btn btn-link">Volver al Home</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFoundPage; 