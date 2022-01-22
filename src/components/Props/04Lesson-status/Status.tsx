type StatusProps = {
    status:'loading'|'success'|'error'
}

export const Status =(props: StatusProps)=> {
    let message
    if (props.status === 'loading') {
        message = 'Transaction is loading'
    } else if (props.status === 'success') {
        message = 'Transaction completed successfully'
    } else if (props.status === 'error') {
        message = 'Transaction failed'
    }

    return (
        <div>
            <h3>message - {message}</h3>
        </div>
    )
}