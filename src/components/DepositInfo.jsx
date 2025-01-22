import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Landmark } from "lucide-react";

const DepositInfoDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          <Landmark className="w-4 h-4 mr-2" />
          Ver información de depósito
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Información de Depósito</AlertDialogTitle>
          <AlertDialogDescription>
            Para formalizar su inscripción como socio y recibir su certificado
            de aporte, debe realizar un depósito que incluirá:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4">
          <ul className="pl-6 space-y-2 text-sm list-disc">
            <li>RD$1,000 para la inscripción</li>
            <li>20% del valor del producto que desea financiar como aporte</li>
          </ul>
          <div className="pt-4 mt-4 border-t">
            <h4 className="mb-2 font-semibold">Datos Bancarios:</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <span className="text-muted-foreground">Banco:</span>
              <span>Banco BHD</span>
              <span className="text-muted-foreground">No. Cuenta:</span>
              <span>36045180016</span>
              <span className="text-muted-foreground">Tipo:</span>
              <span>Ahorro</span>
            </div>
          </div>
        </div>
        <AlertDialogFooter className="flex-col items-center sm:flex-row">
          <p className="mb-4 text-xs text-muted-foreground sm:mb-0 sm:mr-auto">
            Atentamente, Depto. de Tesorería - COOPEBRED
          </p>
          <AlertDialogAction>Entendido</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DepositInfoDialog;
