
interface InventoryRowInterface {
    key: number,
    companyName: string,
    policyNumber: string,
    expirationDate: Date,
    renewal: boolean,
    auditorId: number,
    auditType: string,
    reason: string,
    premiumAmount: string,
    stateAbbr: string,
    queue: string,
    status: string,
    appointmentDate: Date,
}

export default InventoryRowInterface;