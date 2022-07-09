import { useNavigate } from 'react-router-dom';
import {
  Root as DropdownMenuRoot,
  Group as DropdownMenuGroup,
} from '@radix-ui/react-dropdown-menu';

import { DotsThreeVertical } from 'phosphor-react';

import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './styles';

export function MoreActionsInSeeDetails() {
  const navigate = useNavigate();

  return (
    <DropdownMenuRoot modal={false}>
      <DropdownMenuTrigger>
        <DotsThreeVertical alt="Mais opções" />
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => navigate('./edit')}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate('./delete')} color="red">
            Deletar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
