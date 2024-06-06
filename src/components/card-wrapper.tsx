import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardWrapperProps = {
  formTitle: string;
  formDesc: string;
  children: React.ReactNode;
  footerHref: string;
  footerLabel: string;
};

const CardWrapper = ({
  formTitle,
  formDesc,
  children,
  footerHref,
  footerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <h1 className="text-3xl font-extrabold text-neutral-800">
              {formTitle}
            </h1>
            <p className="text-sm text-muted-foreground">{formDesc}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button
          className="w-full font-normal"
          variant={"link"}
          asChild
          size={"sm"}
        >
          <NavLink to={footerHref}>{footerLabel}</NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
