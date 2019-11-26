pragma solidity ^0.5.7;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Pausable.sol";

contract JarvisRewardToken is Initializable, ERC20, ERC20Burnable, ERC20Pausable {
  string public constant name = "Jarvis Reward Token";
  string public constant symbol = "JRT";
  uint8 public constant decimals = 18;
  uint256 public constant INITIAL_SUPPLY = 420000000 * 1E18;

  function initialize() initializer public {
    ERC20Pausable.initialize(msg.sender);
    _mint(msg.sender, INITIAL_SUPPLY);
  }

  function transferToMany(address[] calldata _recipients, uint[] calldata _values) external returns (bool) {
    require(_recipients.length == _values.length);
    for (uint i = 0; i < _values.length; i++) {
      require(transfer(_recipients[i], _values[i]));
    }
    return true;
  }
}
