import swal  from 'sweetalert';

class AlertMessage {
    showAlertMessage(typeMessage: boolean) {
        if (typeMessage) {
            return this.successAlert();
        } else {
            return this.failedAlert();
        }
    }

    private successAlert() {
        return (
            swal({
                text: 'Ponto de coleta criado.',
                icon: 'success',
                closeOnClickOutside: false
            })
        );
    }

    private failedAlert() {
        return (
            swal({
                title: 'Opss',
                text: 'Algo de errado não está certo.',
                icon: 'error',
                closeOnClickOutside: false
            })
        );
    }
}

export default AlertMessage;