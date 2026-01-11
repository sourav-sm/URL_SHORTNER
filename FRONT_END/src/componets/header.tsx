export const Header=()=>{
    return (
        <div className="flex justify-between p-4 border-b-1 border-gray-200">
            <div className="pl-24">LOGO</div>
            <div className="flex justify-between space-x-3">
                <div className="pt-1 text-gray-500">Features</div>
                <div className="pt-1 text-gray-500">Pricing</div>
                <div className="bg-blue-900 text-white px-4 py-1 rounded-xl">Sign In</div>
            </div>
        </div>
    )
}
