import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de website</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Desenvolvimento</td>
                            <td>13/04/2021</td>
                        </tr>
                        <tr>
                            <td width="50%">Comida</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 100,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/04/2021</td>
                        </tr>
                        
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
            
        </div>
    )
}